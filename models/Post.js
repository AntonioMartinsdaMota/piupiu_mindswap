import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  content: { type: String, required: [true, "Please add content"] },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Please add a user"],
  },
  createdAt: { type: Date, default: Date.now },

  comments: [
    {
      content: { type: String },
      user: { type: mongoose.Schema.ObjectId, ref: "User" },
    },
  ],
  likes: [
    {
      user: { type: mongoose.Schema.ObjectId, ref: "User" },
    },
  ],
});

module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema);
