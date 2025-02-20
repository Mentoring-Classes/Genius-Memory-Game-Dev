import User from "../models/User";
import Rank from "../models/Rank";
import { Request, Response } from 'express';

/* -------------------------post------------------------- */
export const postUser = async (req: Request, res: Response) => {
  const { email, password } = req.body

  if (!email && !password) {
    return res.status(422).json({ msg: 'Email and Password is required' })
  }

  const userExist = await User.findOne({ email: email })

  if (userExist) {
    return res.status(422).json({ msg: 'Email already exists' })
  }

  const user = new User({
    email: email,
    password: password
  })

  const rank = new Rank({
    userId: user._id,
    bestScore: 0,
    rank: "Bronze",
    rankPoints: 0,
    bestStreak: 0
  });

  await rank.save();

  try {
    await user.save()
    res.status(201).json({ msg: 'Save' })

  } catch (error) {
    res.status(500).json({ msg: "Error" })
  }
}

/*  -------------------------patch-------------------------  */
export const patchUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updates = req.body;
  
      const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User updated', user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: 'Error to update user', error });
    }
  };

/*  -------------------------get-------------------------  */
  export const getUser = async (req: Request, res: Response) => {
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
  
/* -------------------------delete------------------------- */
export const removeUser = async (req:Request, res: Response) => {
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