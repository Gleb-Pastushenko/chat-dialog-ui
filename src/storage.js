// App imports
import { createStore } from "redux";
import { INITIAL_MESSAGES, MESSAGES_FOR_REPLY } from "./constants";

// Firebase imports
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQ7lBdBI8py75MJW3PAVrXuixIPFc8w20",
  authDomain: "chat-dialog-ui.firebaseapp.com",
  projectId: "chat-dialog-ui",
  storageBucket: "chat-dialog-ui.appspot.com",
  messagingSenderId: "500462826259",
  appId: "1:500462826259:web:b8fa7dc7c1871ceb53a0e6",
  measurementId: "G-PVMRERJZLV",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const defaultState = {
  messages: INITIAL_MESSAGES,
  messagesForReply: MESSAGES_FOR_REPLY,
  firebaseAuth: auth,
  firebaseDB: db,
  isLogged: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            text: action.payload.text,
            isCurrentUser: action.payload.isCurrentUser,
          },
        ],
      };
    case "LOGIN":
      return { ...state, isLogged: true };

    case "LOGOUT":
      return { ...state, isLogged: false };

    default:
      return state;
  }
};

export const store = createStore(reducer);
