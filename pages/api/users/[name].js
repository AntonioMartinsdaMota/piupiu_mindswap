import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

dbConnect();

export default async (req, res) => {
    const {
        query: { name },
        method,
    } = req;

    switch (method) {
        case 'GET':
            try {
                const user = await User.findOne({ name });
               
                if (!user) {
                    return res.status(404).json({
                        message: 'User not found',
                    });
                }
                res.status(200).json(user);
            } catch (error) {
                res.status(500).json({
                    message: error.message,
                });

            }
            break;
        case 'PUT':
            try {
                const user = await User.findOneAndUpdate(name , req.body, {
                    new: true,
                    runValidators: true,
                });
                if (!user) {
                    return res.status(404).json({
                        message: 'User not found',
                    });
                }
                res.status(200).json(user);
            } catch (error) {
                res.status(500).json({
                    message: error.message,
                });
            }

            break;
        case 'DELETE':
            try {
                const user = await User.findOneAndDelete(name);
                if (!user) {
                    return res.status(404).json({
                        message: 'User not found',
                    });
                }
                res.status(200).json(user);
            }

            catch (error) {
                res.status(500).json({
                    message: error.message,
                });
            }
            break;
        default:
            res.status(400).json({
                message: 'Method not allowed',});
                break;
        
    }
}






