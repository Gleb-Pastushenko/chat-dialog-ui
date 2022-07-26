// App imports
import { createStore } from "redux";

// Firebase imports
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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

const pause = async () => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {}, 1000);
  });
};

pause();

const auth = getAuth(app);
const db = getFirestore(app);

const defaultState = {
  auth: auth,
  db: db,
  isLogged: auth.user ? true : false,
  user: undefined,
  disableListener: undefined,
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
    case "LOGIN": {
      return { ...state, isLogged: true };
    }

    case "LOGOUT":
      return { ...state, isLogged: false };

    case "GET_USER":
      return { ...state, user: action.payload };

    case "SET_DISABLE_LISTENER": {
      return { ...state, disableListener: action.payload };
    }

    default:
      return state;
  }
};

export const store = createStore(reducer);
