import { Request, Response } from 'express';
import Rank from '../models/Rank';

export const create = async (req: Request, res: Response) => {
  const allRanks = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Grandmaster'];

  try {
    for (let i = 0; i < allRanks.length; i++) {
      const rankExist = await Rank.findOne({ rank: allRanks[i] })

      if (rankExist) {
        return res.status(422).json({ msg: `Rank ${rankExist} already exists` }); 
      }else{
        const newRank = new Rank({
          rank: allRanks[i],
          nextRank: 300 * (i + 1),
        });
        await newRank.save();
      }
    }
    res.status(201).json({ msg: 'Rank saved successfully'});

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
