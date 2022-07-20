import React from "react";
import "./footer.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

export const Footer = () => {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();

  const handleTextChange = (e) => {
    setText(e.currentTarget.value);
  };

  const sendMessageByPressingEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (text.trim() !== "") {
      dispatch({
        type: "SEND_MESSAGE",
        payload: { text: text, isCurrentUser: true },
      });
    }
    setText("");
  };

  return (
    <footer className="footer">
      <div className="footer__textarea-plate">
        <textarea
          className="footer__textarea"
          value={text}
          onChange={handleTextChange}
          onKeyDown={sendMessageByPressingEnter}
        ></textarea>
      </div>
      <div className="footer__button-plate">
        <button className="footer__button" onClick={sendMessage}>
          Send message
        </button>
      </div>
    </footer>
  );
};
