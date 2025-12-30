import express from "express";
import { askAI } from "../services/aiService.js";
import AiHistory from "../models/AiHistory.js";

const router = express.Router();

router.post("/ask", async (req, res) => {
  try {
    const { userId, courseCode, lessonTitle, question } = req.body;

    if (!userId || !question) {
      return res.status(400).json({ message: "Missing fields" });
    }

    // ✅ GENERAL AI PROMPT (ANSWERS EVERYTHING)
    const prompt = `
You are a helpful AI tutor.
Explain clearly and simply for a beginner.

Question:
${question}
`;

    const answer = await askAI(prompt);

    // ✅ SAVE TO MONGODB
    await AiHistory.create({
      userId,
      courseCode,
      lessonTitle,
      question,
      answer
    });

    res.json({ answer });

  } catch (error) {
    console.error("AI ERROR:", error);
    res.status(500).json({ message: "AI service failed" });
  }
});

export default router;
