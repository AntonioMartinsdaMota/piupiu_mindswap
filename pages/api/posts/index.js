import Post from "../../../models/Post";
import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";

dbConnect();

export default async (req, res) => {
  const method = req.method;

  switch (method) {
    case "GET":
      try {
        const posts = await Post.find().populate("user", "name");
        console.log(posts);
        res.status(200).json({ success: true, data: posts });
      } catch (e) {
        res.status(400).json({ method: get, success: false, error: e.message });
      }
      break;
    case "POST":
      try {
        console.log(req.body);
        const { content } = req.body;
        const cookie = req.headers.cookie;
        console.log(cookie);
        const email = cookie.split("=")[1];
        const user = await User.findOne({ email });
        const name = user.name;
        console.log(name);

        const post = await Post.create({ content, user });
        res.status(200).json({ success: true, data: post });
      } catch (e) {
        res.status(400).json({ success: false, error: e.message });
      }
      break;
    default:
      res.status(400).json({ success: false, error: "Bad request" });
  }
};
