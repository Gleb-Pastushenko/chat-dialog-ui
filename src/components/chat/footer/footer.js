import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

import "./footer.css";

export const Footer = () => {
  const [messageText, setMessageText] = useState("");
  const messageTextRef = useRef();
  const { db, user } = useSelector((state) => state);
  const colRef = collection(db, "messages");
  const dispatch = useDispatch();

  const sendMessage = () => {
    const messageTextTrimmed = messageText.trim();
    if (messageTextTrimmed !== "") {
      addDoc(colRef, {
        text: messageTextTrimmed,
        uid: user.uid,
        createdAt: serverTimestamp(),
      }).then(() => {
        setMessageText("");
      });
    }
  };

  const handleTextareaOnChange = (e) => {
    setMessageText(e.currentTarget.value);
  };

  const handleTextareaOnKeyUp = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const handleButtonOnClick = (e) => {
    messageTextRef.current.focus();
    sendMessage(e);
  };

  return (
    <footer className="footer">
      <div className="footer__textarea-plate">
        <textarea
          ref={messageTextRef}
          className="footer__textarea"
          value={messageText}
          onChange={handleTextareaOnChange}
          onKeyUp={handleTextareaOnKeyUp}
        ></textarea>
      </div>
      <div className="footer__button-plate">
        <button className="footer__button" onClick={handleButtonOnClick}>
          Send message
        </button>
      </div>
    </footer>
  );
};
