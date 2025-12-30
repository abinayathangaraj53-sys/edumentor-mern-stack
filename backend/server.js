import dotenv from "dotenv";
import path from "path";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();
const app = express();
console.log("JWT_SECRET:", process.env.JWT_SECRET);

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/edumentor")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));
app.use("/api/auth", authRoutes);

app.use("/api/courses", courseRoutes);
app.use("/api/progress", progressRoutes);

app.use("/api/certificate", certificateRoutes);
app.use("/api/ai", aiRoutes);



app.listen(5000, () => {
  console.log("Server running on port 5000");
});
