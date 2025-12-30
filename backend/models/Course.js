import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  lessonId: String,
  title: String,
  duration: String,
  videoUrl: String,
  locked: Boolean,
});

const moduleSchema = new mongoose.Schema({
  title: String,
  free: Boolean,
  lessons: [lessonSchema],
});

const courseSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  title: String,
  price: Number,
  level: String,
  description: String,
  thumbnail: String,
  modules: [moduleSchema],
});

export default mongoose.model("Course", courseSchema);
