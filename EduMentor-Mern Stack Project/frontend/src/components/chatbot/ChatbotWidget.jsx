
import { useState } from "react";
import axios from "axios";

export default function ChatbotWidget({ lesson }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const ask = async () => {
    const res = await axios.post("http://localhost:5000/api/chatbot", {
      lesson, question
    });
    setAnswer(res.data.answer);
  };

  return (
    <div className="card" style={{position:"fixed", right:20, bottom:20, width:320}}>
      <h4>AI Mentor 🤖</h4>
      <input placeholder="Ask a doubt..." onChange={e=>setQuestion(e.target.value)} />
      <button onClick={ask}>Ask</button>
      <p>{answer}</p>
    </div>
  );
}
