import React from "react";
import "./main.css";
import { INITIAL_MESSAGES } from "./constants";
import { Message } from "./message/message";

export const Main = () => {
  const [messages, setMessages] = React.useState(INITIAL_MESSAGES);
  return (
    <main className="main">
      {messages.map(({ text, isCurrentUser }, index) => (
        <Message key={index} text={text} isCurrentUser={isCurrentUser} />
      ))}
    </main>
  );
};
