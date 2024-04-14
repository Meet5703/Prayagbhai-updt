import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  number: { type: String },
  profilepic: { type: String },
  isVerified: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  forgotPasswordToken: { type: String },
  forgotPasswordExpiry: { type: Date },
  courses: { type: Array },
  status: { type: String },
  verifyToken: { type: String },
  verifyTokenExpiry: { type: Date },
  date: { type: Date, default: Date.now },
  time: { type: String, default: () => new Date().toLocaleTimeString() }
});

const User = mongoose.models.Users || mongoose.model("Users", userSchema);

export default User;
