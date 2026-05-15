"use client"
import { useState } from "react"

export default function ChatPage() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  const sendMessage = async () => {
    if (!message) return

    const userMessage = { sender: "user", text: message }
    setMessages([...messages, userMessage])

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    })

    const data = await res.json()

    setMessages(prev => [
      ...prev,
      { sender: "bot", text: data.reply }
    ])

    setMessage("")
  }

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h2>AI ChatBot</h2>

      <div style={{
        height: 400,
        border: "1px solid #ddd",
        padding: 10,
        overflowY: "auto",
        marginBottom: 10
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            textAlign: msg.sender === "user" ? "right" : "left",
            margin: "10px 0"
          }}>
            <span style={{
              background: msg.sender === "user" ? "#0070f3" : "#eee",
              color: msg.sender === "user" ? "#fff" : "#000",
              padding: "8px 12px",
              borderRadius: 10,
              display: "inline-block"
            }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        style={{ width: "80%", padding: 8 }}
      />
      <button onClick={sendMessage} style={{ padding: 8 }}>
        Send
      </button>
    </div>
  )
}
