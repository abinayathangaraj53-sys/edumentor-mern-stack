import mongoose from "mongoose";

const aiHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  courseCode: String,
  lessonTitle: String,
  question: String,
  answer: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("AiHistory", aiHistorySchema);
