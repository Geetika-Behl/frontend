import React, { useState } from "react";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";
import "./Chatbot.css";
import Navbar from "@/components/Navbar/Navbar";
import bulb from "../../assets/bulb.png"

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post("http://localhost:5000/api/chatbot", {
        message: input,
      });

      setMessages((prev) => [
        ...prev,
        { text: response.data.reply, sender: "bot" },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Error connecting to the server. Please try again.", sender: "bot" },
      ]);
    }
  };

  return (
    <div >
         <img src={bulb} alt="" className='background'/>
      <Navbar />
        <div className="chatbot-container">
      {/* Header */}
      <div className="chatbot-header">Ask CleanYuva Assistant</div>

      {/* Chat Messages */}
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} className="send-btn">
          <FaPaperPlane />
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default Chatbot;
