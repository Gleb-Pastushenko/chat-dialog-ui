import React from "react";
import "./main.css";
import { useSelector } from "react-redux/es/exports";
import { Message } from "./message/message";

export const Main = () => {
  const messages = useSelector((state) => state.messages);

  // const [messages, setMessages] = React.useState(INITIAL_MESSAGES);

  return (
    <main className="main">
      {messages.map(({ text, isCurrentUser }, index) => (
        <Message key={index} text={text} isCurrentUser={isCurrentUser} />
      ))}
    </main>
  );
};
