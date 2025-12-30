import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  courseCode: { type: String, required: true },
  courseTitle: { type: String, required: true },
  studentName: { type: String, required: true },

  certificateId: { type: String, unique: true },
  issuedAt: { type: Date, default: Date.now },

  paid: { type: Boolean, default: false }
});

export default mongoose.model("Certificate", certificateSchema);
