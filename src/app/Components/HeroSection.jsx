"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatBotPage() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Welcome to OnWay Support! How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotReply = (text) => {
    const lower = text.toLowerCase();

    if (lower.includes("book")) {
      return "🚗 To book a ride, go to Dashboard → Book Ride and select pickup & destination.";
    }

    if (lower.includes("payment")) {
      return "💳 You can manage payments from Wallet & Payments section.";
    }

    if (lower.includes("sos")) {
      return "🆘 During an active ride, press the Panic Button for emergency support.";
    }

    if (lower.includes("hello") || lower.includes("hi")) {
      return "Hello! 👋 How can I assist you today?";
    }

    return "🤖 Sorry, I didn't understand that. Try asking about booking, payment, or SOS.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botMessage = {
      sender: "bot",
      text: getBotReply(input),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="min-h-300px max-w-4xl mx-auto bg-gray-100 flex flex-col">

      {/* Header */}
      <div className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">OnWay AI Support</h1>
        <span className="text-sm text-green-400">● Online</span>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl text-sm ${msg.sender === "user"
                ? "ml-auto bg-blue-600 text-white"
                : "bg-white text-gray-800 shadow"
              }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}