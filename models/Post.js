import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Please add a title"],
		maxlength: [100, "Title can not be more than 100 characters"],
	},
	content: { type: String, required: [true, "Please add content"] },
	user: { type: mongoose.Schema.ObjectId, ref: "User", required: [true, "Please add a user"] },
	createdAt: { type: Date, default: Date.now },
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema);
