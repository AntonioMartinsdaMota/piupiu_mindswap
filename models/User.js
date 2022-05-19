import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    trim: true,
    // match: [
    //     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //     "Please add a valid email"
    // ]
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: [8, "Password must be at least 8 characters"],
    maxlength: [50, "Password can not be more than 50 characters"],
  },
  name: {
    type: String,
    required: [true, "Please add a name"],
    maxlength: [50, "Name can not be more than 50 characters"],
  },

  avatar: {
    type: String,
    default: "default.jpg",
  },
  role: {
    type: String,
    enum: ["Speaker", "Admin", "Guest", "Student", "Teacher"],
    default: "Speaker",
  },
  
  
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
