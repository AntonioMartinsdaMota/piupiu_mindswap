import mongoose from "mongoose";

const  NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a title"],
        unique: true,
        trim: true,
        maxlength: [50, "Title can not be more than 50 characters"]
    },
    description: {
        type: String,
        required: [true, "Please add a description"],
        maxlength: [500, "Description can not be more than 500 characters"]
    },

}
);

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);
