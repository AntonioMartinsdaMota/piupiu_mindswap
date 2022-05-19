import dbConnect from "../../../utils/dbConnect";
import Post from "../../../models/Post";
import User from "../../../models/User";

dbConnect();

export default async (req, res) => {
  const { id } = req.query;
  console.log(id);

  const method = req.method;

  switch (method) {
    case "GET":
      try {
        const post = await Post.findById(id)
          .populate("user", "name")
          .populate("comments.user", "name");
          console.log(post)

        if (!post) {
          return res.status(404).json({
            message: "Post not found",
          });
        }
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
      break;

    case "PUT":
      console.log("I am in PUT");
      try {
        const [post, user] = await Promise.all([
          Post.findById(id),
          User.findOne({ email: req.cookies.token }),
        ]);

        console.log(post, user, req.body.content);
        await Post.findByIdAndUpdate(id, {
          $push: {
            comments: {
              content: req.body.content,
              user,
            },
          },
        });

        if (!post) {
          return res.status(404).json({
            message: "Post not found",
          });
        }
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
      break;

    case "DELETE":
      try {
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
          return res.status(404).json({
            message: "Post not found",
          });
        }
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
      break;

    default:
      res.status(400).json({
        message: "Bad request",
      });
      break;
  }
};
