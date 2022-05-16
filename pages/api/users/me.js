import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

dbConnect();

export default async (req, res) => {
    const user = await User.findById(req.session.userId);
    res.status(200).json(user);
}

