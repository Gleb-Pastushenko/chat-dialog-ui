import React from "react";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Message } from "./message/message";

import "./main.css";

export const Main = () => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const mainRef = useRef(null);

  const { db, user } = useSelector((state) => state);
  const colRef = collection(db, "messages");
  const q = query(colRef, orderBy("createdAt", "asc"));

  useEffect(() => {
    const disableListener = onSnapshot(q, (snapshot) => {
      let messages = [];
      snapshot.docs.forEach((doc) => {
        messages.push({
          ...doc.data(),
          id: doc.id,
          isCurrentUser: doc.data().uid === user.uid,
        });
        setMessages(messages);
      });
      mainRef.current.scrollTop = mainRef.current.scrollHeight;
    });

    dispatch({ type: "SET_DISABLE_LISTENER", payload: disableListener });
  }, []);

  return (
    <main className="main" ref={mainRef}>
      {messages.map(({ text, isCurrentUser }, index) => (
        <Message key={index} text={text} isCurrentUser={isCurrentUser} />
      ))}
    </main>
  );
};
