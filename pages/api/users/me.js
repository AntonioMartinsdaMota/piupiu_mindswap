import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

dbConnect();

export default async (req, res) => {
    const cookie = req.headers.cookie;
    const user = await User.findOne({ cookie });
    res.status(200).json(user);
};




