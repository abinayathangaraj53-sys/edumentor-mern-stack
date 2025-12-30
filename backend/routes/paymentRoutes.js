import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Simulate payment success
router.post("/unlock", async (req, res) => {
  const { userId, courseCode } = req.body;

  const user = await User.findById(userId);

  if (!user.purchasedCourses.includes(courseCode)) {
    user.purchasedCourses.push(courseCode);
    await user.save();
  }

  res.json({ success: true });
});

export default router;
