import { useState } from "react";
import "./GlobalAI.css";

export default function GlobalAI() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const userId = localStorage.getItem("userId");

  const askAI = async () => {
    if (loading) return;
    if (!userId) {
      setAnswer("Please login to use AI Mentor.");
      return;
    }
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("http://localhost:5000/api/ai/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          courseCode: "dashboard",
          question,
          lessonTitle: "Dashboard AI Mentor",
          lessonContent:
            "This platform contains CSE courses such as Programming, Web Development, DBMS, OS, DSA, AI, ML, Cloud and DevOps.",
        }),
      });

      const data = await res.json();
      setAnswer(data.answer || "No response from AI");
    } catch {
      setAnswer("AI is busy. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="ai-float-btn" onClick={() => setOpen(true)}>
        🤖
      </div>

      {open && (
        <div className="ai-popup">
          {/* Header */}
          <div className="ai-header">
            AI Mentor
            <span onClick={() => setOpen(false)}>✕</span>
          </div>

          {/* Body */}
          <div className="ai-body">
            <textarea
              placeholder="Ask anything about your courses..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <button onClick={askAI} disabled={loading}>
              {loading ? "Thinking..." : "Ask AI"}
            </button>

            {answer && (
              <div className="ai-answer-box">
                {answer}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
