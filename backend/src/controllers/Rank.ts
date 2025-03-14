import { Request, Response } from 'express';
import Rank from '../models/Rank';
import User from '../models/User';
import { allRanks } from '../consts/Rank';
import { RANK_MESSAGES, USER_MESSAGES } from '../consts/Messages';

export const updateUserRank = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).select('rankPoints rank');

    if (!user) {
      return res.status(404).json({ message: USER_MESSAGES.USER_NOT_FOUND });
    }

    const findRank = await Rank.findById(user.rank);

    if (!findRank) {
      return res.status(404).json({ message: RANK_MESSAGES.RANK_NOT_FOUND });
    }

    if (user.rankPoints >= findRank.requiredPoints) {
        const newRank = await Rank.findOne({ rank: findRank?.nextRank });

        if (user.rankPoints <= findRank.requiredPoints) {
          await user.updateOne({ rank: newRank?._id });
          return res.status(200).json({ message: RANK_MESSAGES.RANK_UPDATED_SUCCESSFULLY });
        } else {
          return res.status(400).json({ message: RANK_MESSAGES.ERROR_UPDATING_RANK });
        }
    }

    return res.status(200).json({ message: RANK_MESSAGES.RANK_NO_UPDATE_NEEDED });
  } catch (error) {
    console.error(RANK_MESSAGES.ERROR_UPDATING_RANK, error);
    return res.status(500).json({ message: RANK_MESSAGES.ERROR_UPDATING_RANK, error });
  }
}

export const create = async (req: Request, res: Response) => {

  try {
    for (let i = 0; i < allRanks.length; i++) {

      const newRank = new Rank({
        rank: allRanks[i],
        requiredPoints: 300 * (i + 1),
        nextRank: allRanks[i + 1]
      });
      await newRank.save();
    }
    return res.status(201).json({ msg: RANK_MESSAGES.RANK_SAVED_SUCCESSFULLY });

  } catch (error) {
    return res.status(500).json({ msg: RANK_MESSAGES.ERROR_SAVING_RANK, error });
  }
};

export const patch = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedRank = await Rank.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedRank) {
      return res.status(404).json({ msg: RANK_MESSAGES.RANK_NOT_FOUND });
    }

    return res.json({ msg: RANK_MESSAGES.RANK_UPDATED_SUCCESSFULLY, rank: updatedRank });

  } catch (error) {
    return res.status(500).json({ msg: RANK_MESSAGES.ERROR_UPDATING_RANK, error });
  }
};

export const get = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const rank = await Rank.findById(id);

    if (!rank) {
      return res.status(404).json({ msg: RANK_MESSAGES.RANK_NOT_FOUND });
    }

    return res.json(rank);

  } catch (error) {
    return res.status(500).json({ msg: RANK_MESSAGES.ERROR_FETCHING_RANK, error });
  }
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const rank = await Rank.findByIdAndDelete(id);

    if (!rank) {
      return res.status(404).json({ msg: RANK_MESSAGES.RANK_NOT_FOUND });
    }

    return res.json({ msg: RANK_MESSAGES.RANK_DELETED_SUCCESSFULLY });

  } catch (error) {
    return res.status(500).json({ msg: RANK_MESSAGES.ERROR_DELETING_RANK, error });
  }
};
