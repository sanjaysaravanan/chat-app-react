import React, { useState } from "react";
import MessageInput from "./MessageInput";
import { MsgProp } from "../types";
import { ws } from "../apis";

const msgs = JSON.parse(localStorage.getItem("msgs") || "[]");

const Message: React.FC<MsgProp> = ({ text, isSelf }) => {
  return (
    <div style={{ textAlign: isSelf ? "right" : "left", margin: "5px 0" }}>
      <div
        style={{
          backgroundColor: isSelf ? "#DCF8C6" : "#F0F0F0",
          padding: "10px",
          borderRadius: "10px",
          display: "inline-block",
        }}
      >
        {text}
      </div>
    </div>
  );
};

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<MsgProp[]>(msgs);

  const addMsg = (msg: MsgProp) => {
    const tempMsg = { ...msg };
    setMessages([...messages, msg]);
    localStorage.setItem("msgs", JSON.stringify([...messages, msg]));

    tempMsg.isSelf = false;
    ws.send(JSON.stringify(msg));
  };

  ws.onmessage = (e) => {
    const msgObj = JSON.parse(e.data);

    msgObj.isSelf = false;

    setMessages([...messages, msgObj]);
    localStorage.setItem("msgs", JSON.stringify([...messages, msgObj]));
  };

  return (
    <>
      <div
        className="p-4 w-full h-full overflow-y-auto no-scrollbar"
        style={{
          height: "calc(100vh - 104px)",
        }}
      >
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} isSelf={msg.isSelf} />
        ))}
      </div>
      <div className="p-2 mb-6 absolute bottom-0 w-full bg-secondary">
        <MessageInput addMsg={addMsg} />
      </div>
    </>
  );
};

export default ChatBox;
