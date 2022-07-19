import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__textarea-plate">
        <textarea className="footer__textarea"></textarea>
      </div>
      <div className="footer__button-plate">
        <button className="footer__button">Send message</button>
      </div>
    </footer>
  );
};
