import React from "react";

const MessageList: React.FC = () => {
  // Placeholder messages
  const messages = [
    { id: 1, text: "Hello there!", sender: "user" },
    { id: 2, text: "Hi! How can I help you?", sender: "bot" },
  ];

  return (
    <div className="message-list p-4 space-y-2">
      {messages.map((message) => (
        <div key={message.id} className={`message ${message.sender}`}>
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
