
import ChatbotWidget from "../components/chatbot/ChatbotWidget";

export default function Lesson() {
  return (
    <div className="card">
      <h2>Lesson: What is Java?</h2>
      <p>Java is a high-level, class-based, object-oriented programming language.</p>
      <ChatbotWidget lesson="Java Introduction" />
    </div>
  );
}
