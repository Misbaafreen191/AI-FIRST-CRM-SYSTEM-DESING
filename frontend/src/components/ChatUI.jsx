import React, { useState } from "react";
import axios from "axios";

function ChatUI() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!message.trim()) return;

    const userMsg = { type: "user", text: message };
    setMessages((prev) => [...prev, userMsg]);

    setLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:8000/chat/", {
        message,
      });

      const data = res.data.data;

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "✔ Interaction logged successfully",
        },
      ]);

      window.dispatchEvent(
        new CustomEvent("fillForm", { detail: data })
      );

      setMessage("");
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Error processing request" },
      ]);
    }

    setLoading(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "500px" }}>
      
      <h3>🤖 AI Assistant</h3>

      <div style={{
        flex: 1,
        overflowY: "auto",
        marginBottom: "10px"
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            background: msg.type === "user" ? "#e3f2fd" : "#d4edda",
            padding: "10px",
            borderRadius: "10px",
            marginBottom: "8px"
          }}>
            {msg.text}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          placeholder="Describe interaction..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ flex: 1, padding: "10px" }}
        />

        <button onClick={send} disabled={loading}>
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default ChatUI;