import User from "../models/User";
import { Request, Response } from "express";
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
