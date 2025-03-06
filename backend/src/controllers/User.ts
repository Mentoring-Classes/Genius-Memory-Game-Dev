import User from "../models/User";
import Rank from "../models/Rank";
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const { email, password } = req.body

  if (!email && !password) {
    return res.status(422).json({ msg: 'Email and Password is required' })
  }

  const userExist = await User.findOne({ email: email })

  if (userExist) {
    return res.status(422).json({ msg: 'Email already exists' })
  }
  const defaultRank = await Rank.findOne({ rank: "Bronze" });

  const user = new User({
    email: email,
    password: password,
    rank: defaultRank?._id
  });

  try {
    await user.save()
    res.status(201).json({ msg: 'Save', user: user })

  } catch (error) {
    res.status(500).json({ msg: "Error" })
  }
}

export const patch = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const oldRankPoints = await User.findById(id).select('rankPoints rank');
    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const findRank = await Rank.findById(updatedUser.rank);
    console.log(findRank);

    if (!findRank) {
      return res.status(404).json({ message: 'Rank not found' });
    }

    if (updatedUser.rankPoints >= findRank.requiredPoints) {
      const newRank = await Rank.findOne({ rank: findRank?.nextRank });

      if (updatedUser.rankPoints <= findRank.requiredPoints + 300) {
        await updatedUser.updateOne({ rank: newRank?._id });
      } else {

        console.error("Error to update rank");
        updatedUser.set({ rankPoints: oldRankPoints?.rankPoints });
        await updatedUser.save();
      }
    }
    res.json({ message: 'User updated', user: updatedUser });
  } catch (error) {
    console.error("Error to update rank", error);
    res.status(500).json({ message: 'Error to update user', error });
  }
};

export const get = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);

  } catch (error) {

    res.status(500).json({ msg: "Error to find user", error });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ msg: 'User deleted' });
  } catch (error) {
    res.status(500).json({ msg: 'Error to delete user', error });
  }
}