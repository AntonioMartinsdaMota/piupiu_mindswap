import User from "../../../models/User";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {

    const email = req.cookies.token;

    if (!email) {
        res.status(401).json({
            success: false,
            message: "Unauthorized"
        });
        return;
    }

    const user = await User.findOne({email});

    if (!user) {
        res.status(404).json({
            success: false,
            message: "User not found"
        });
        return;
    }

    res.status(200).json({
        success: true,
        data: user
    });
}




