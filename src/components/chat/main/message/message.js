import React from "react";
import { CURRENT_USER_AVATAR_URL, OTHER_USER_AVATAR_URL } from "./constants";
import "./message.css";

export const Message = ({ text, isCurrentUser }) => {
  return (
    <div className={`message ${isCurrentUser ? "message_current-user" : ""}`}>
      <div className="message__avatar">
        <img
          className="message__image"
          src={isCurrentUser ? CURRENT_USER_AVATAR_URL : OTHER_USER_AVATAR_URL}
          alt="avatar"
        />
      </div>
      <div className="message__text-bubble">{text}</div>
    </div>
  );
};
