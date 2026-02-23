import { useState, useRef, useEffect } from "react";
import { sendMessage } from "../services/api";

interface Message {
  role: string;
  text: string;
}

const suggestions = [
  "What are Sailu's skills?",
  "Explain FastAPI",
  "Show projects"
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<Message[]>([
    { role: "bot", text: "Hello 👋 I'm Sailu's AI assistant. Ask me anything!" }
  ]);
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async (customMessage?: string) => {
    const finalMessage = customMessage || message;
    if (!finalMessage) return;

    const userMsg = { role: "user", text: finalMessage };
    setChat(prev => [...prev, userMsg]);
    setMessage("");
    setTyping(true);

    const reply = await sendMessage(finalMessage);

    setTyping(false);
    const botMsg = { role: "bot", text: reply };
    setChat(prev => [...prev, botMsg]);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, typing]);

  return (
    <>
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        🤖
      </button>

      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <span>AI Resume Assistant</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="chat-body">
            {chat.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.role}`}>
                {msg.text
                  .replace(/\*\*/g, "")   
                  .replace(/`/g, "")     
                  .split("\n")
                  .map((line, i) => {

                    const trimmed = line.trim();
                    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                      return (
                        <div key={i} className="bullet-line">
                          • {trimmed.slice(2)}
                        </div>
                      );
                    }

                    if (trimmed === "") {
                      return <br key={i} />;
                    }

                    return <div key={i}>{trimmed}</div>;
                  })}
              </div>
            ))}

            {typing && (
              <div className="chat-message bot typing">
                <span className="dots">...</span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          <div className="chat-suggestions">
            {suggestions.map((s, i) => (
              <button key={i} onClick={() => handleSend(s)}>
                {s}
              </button>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about sailaja..."
            />
            <button onClick={() => handleSend()}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;