import express from "express";
import User from "../models/User.js";

const router = express.Router();

// 🔓 UNLOCK COURSE
router.post("/unlock", async (req, res) => {
  try {
    const { userId, courseCode } = req.body;

    console.log("UNLOCK CALLED:", userId, courseCode);

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.purchasedCourses.includes(courseCode)) {
      user.purchasedCourses.push(courseCode);
      await user.save();
    }

    res.json({ success: true, purchasedCourses: user.purchasedCourses });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
// 👤 GET USER BY ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 🔑 MUST RETURN purchasedCourses
    res.json({
      _id: user._id,
      email: user.email,
      purchasedCourses: user.purchasedCourses
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
