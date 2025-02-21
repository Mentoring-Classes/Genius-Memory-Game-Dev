import { Request, Response } from 'express';
import Rank from '../models/Rank';

export const create = async (req: Request, res: Response) => {
  const { userId, bestScore, rank, rankPoints, bestStreak } = req.body;

  try {
    const existingRank = await Rank.findOne({ userId });

    if (existingRank) {
      return res.status(422).json({ msg: 'Rank already exists for this user' });
    }

    const newRank = new Rank({ userId, bestScore, rank, rankPoints, bestStreak });

    await newRank.save();
    res.status(201).json({ msg: 'Rank saved successfully', rank: newRank });

  } catch (error) {
    res.status(500).json({ msg: 'Error saving rank', error });
  }
};

export const patch = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedRank = await Rank.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedRank) {
      return res.status(404).json({ msg: 'Rank not found' });
    }

    res.json({ msg: 'Rank updated successfully', rank: updatedRank });

  } catch (error) {
    res.status(500).json({ msg: 'Error updating rank', error });
  }
};

export const get = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const rank = await Rank.findById(id);

    if (!rank) {
      return res.status(404).json({ msg: 'Rank not found' });
    }

    res.json(rank);

  } catch (error) {
    res.status(500).json({ msg: 'Error fetching rank', error });
  }
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const rank = await Rank.findByIdAndDelete(id);

    if (!rank) {
      return res.status(404).json({ msg: 'Rank not found' });
    }

    res.json({ msg: 'Rank deleted successfully' });

  } catch (error) {
    res.status(500).json({ msg: 'Error deleting rank', error });
  }
};
