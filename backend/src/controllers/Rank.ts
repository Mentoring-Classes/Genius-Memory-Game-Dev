import { Request, Response } from 'express';
import Rank from '../models/Rank';
import { allRanks } from '../consts/Rank';
import { RANK_MESSAGES } from '../consts/Messages';

export const create = async (req: Request, res: Response) => {

  try {
    for (let i = 0; i < allRanks.length; i++) {
      const rankExist = await Rank.findOne({ rank: allRanks[i] })

      if (rankExist) {
        return res.status(422).json({ msg: RANK_MESSAGES.RANK_ALREADY_EXISTS(allRanks[i]) });
      } else {
        const newRank = new Rank({
          rank: allRanks[i],
          requiredPoints: 300 * (i + 1),
          nextRank: allRanks[i + 1]
        });
        await newRank.save();
      }
    }
    res.status(201).json({ msg: RANK_MESSAGES.RANK_SAVED_SUCCESSFULLY });

  } catch (error) {
    res.status(500).json({ msg: RANK_MESSAGES.ERROR_SAVING_RANK, error });
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

    res.json({ msg: RANK_MESSAGES.RANK_UPDATED_SUCCESSFULLY, rank: updatedRank });

  } catch (error) {
    res.status(500).json({ msg: RANK_MESSAGES.ERROR_UPDATING_RANK, error });
  }
};

export const get = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const rank = await Rank.findById(id);

    if (!rank) {
      return res.status(404).json({ msg: RANK_MESSAGES.RANK_NOT_FOUND });
    }

    res.json(rank);

  } catch (error) {
    res.status(500).json({ msg: RANK_MESSAGES.ERROR_FETCHING_RANK, error });
  }
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const rank = await Rank.findByIdAndDelete(id);

    if (!rank) {
      return res.status(404).json({ msg: RANK_MESSAGES.RANK_NOT_FOUND });
    }

    res.json({ msg: RANK_MESSAGES.RANK_DELETED_SUCCESSFULLY });

  } catch (error) {
    res.status(500).json({ msg: RANK_MESSAGES.ERROR_DELETING_RANK, error });
  }
};
