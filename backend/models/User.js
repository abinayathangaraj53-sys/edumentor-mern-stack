import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  // 🔑 THIS IS IMPORTANT
  purchasedCourses: {
    type: [String],
    default: []
  }
});

export default mongoose.model("User", userSchema);
