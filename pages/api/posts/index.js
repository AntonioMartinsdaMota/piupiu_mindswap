import Post from "../../models/Post";
import dbConnect from "../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
    const method = req.method;

    switch (method) {
        case "GET":
            try {
                const posts = await Post.find();
                res.status(200).json({ success: true, data: posts });
            }
            catch (e) {
                res.status(400).json({ method: get, success: false, error: e.message });
            }
            break;
        case "POST":
            try {
                const post = await Post.create(req.body);
                res.status(201).json({ success: true, data: post });
            }
            catch (e) {
                res.status(400).json({ success: false, error: e.message });
            }
            break;
        default:
            res.status(400).json({ success: false, error: "Bad request" });
    }
};

