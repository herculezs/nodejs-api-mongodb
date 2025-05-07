import User from '../models/userModel.js';

class UserController {
    async getUserById(req, res) {
        const userId = req.params.id;

        if (!this.isValidObjectId(userId)) {
            return res.status(400).json({ message: 'Invalid user ID format' });
        }

        try {
            const user = await User.findOne({ _id: userId, age: { $gt: 21 } });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: 'Server error', error: error.message });
        }
    }

    isValidObjectId(id) {
        return /^[0-9a-fA-F]{24}$/.test(id);
    }
}

export default UserController;