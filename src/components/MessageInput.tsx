import React, { useState } from "react";
import { MsgInpProp } from "../types";

const MessageInput: React.FC<MsgInpProp> = ({ addMsg }) => {
  const [message, setMessage] = useState("");

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to send message goes here
    addMsg({ text: message, isSelf: true });
    setMessage("");
  };

  return (
    <form className="mt-2" onSubmit={sendMessage}>
      <input
        type="text"
        className="border w-4/5 p-2 rounded m-2"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="btn mt-2 bg-blue-500 text-white p-2 rounded"
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;
