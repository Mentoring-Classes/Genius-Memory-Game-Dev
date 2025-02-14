import User from "../models/User";
import Express from "express";

export const deleteUser = async (req: Express.Request, res: Express.Response) => {
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