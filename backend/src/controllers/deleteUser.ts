import User from "../models/User";

export const deleteUser = async (req: any, res: any) => {
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