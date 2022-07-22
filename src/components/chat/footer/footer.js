import React from "react";
import "./footer.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getRandomMessage } from "./utils/getRandomMessage";

export const Footer = () => {
  const [messageText, setMessageText] = React.useState("");
  const messageTextRef = React.useRef();
  const dispatch = useDispatch();

  const sendMessage = (e) => {
    const msgText = messageText.trim();
    if (msgText !== "") {
      dispatch({
        type: "SEND_MESSAGE",
        payload: { text: msgText, isCurrentUser: true },
      });
      setMessageText("");
      getReply();
    }
  };

  const getReply = () => {
    const { msgText, delay } = getRandomMessage();
    setTimeout(() => {
      dispatch({
        type: "SEND_MESSAGE",
        payload: { text: msgText, isCurrentUser: false },
      });
    }, delay);
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
