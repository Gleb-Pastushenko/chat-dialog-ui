import React from "react";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
} from "firebase/auth";
import { setPersistence } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { SignupModal } from "./signupModal/signupModal";
import { ErrorModal } from "./errorModal/errorModal";

import "./login.css";

export const Login = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [submitFunc, setSubmitFunc] = useState(undefined);
  const [errorCode, setErrorCode] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const login = (email, password) => {
    setPersistence(auth, browserSessionPersistence).then(() => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch({ type: "LOGIN" });
          dispatch({ type: "GET_USER", payload: user });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorCode(errorCode);
          setOpenErrorModal(true);
        });
    });
  };

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN" });
        dispatch({ type: "GET_USER", payload: user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleLoginButtonClick = () => {
    setSubmitFunc(() => login);
    setOpenLoginModal(true);
  };

  const handleSignupButtonClick = () => {
    setSubmitFunc(() => signup);
    setOpenLoginModal(true);
  };

  return (
    <main className="login">
      <button className="login__button" onClick={handleLoginButtonClick}>
        Login
      </button>
      <button className="login__button" onClick={handleSignupButtonClick}>
        Sign up
      </button>
      <SignupModal
        open={openLoginModal}
        setOpen={setOpenLoginModal}
        submitFunc={submitFunc}
      />
      <ErrorModal
        open={openErrorModal}
        setOpen={setOpenErrorModal}
        errorCode={errorCode}
      />
    </main>
  );
};
