import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/update", async (req, res) => {
  const { userId, courseCode, progress } = req.body;

  await User.findByIdAndUpdate(userId, {
    $set: { [`progress.${courseCode}`]: progress }
  });

  res.json({ success: true });
});

export default router;
