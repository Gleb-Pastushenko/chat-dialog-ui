import React from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import SignupModal from "./signupModal/signupModal";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const Login = () => {
  const [open, setOpen] = React.useState(false);
  const [submitFunc, setSubmitFunc] = React.useState(undefined);
  const auth = useSelector((state) => state.firebaseAuth);
  const dispatch = useDispatch();

  const login = (email, password) => {
    console.log("LogIn");
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    console.log(`auth: ${auth}`);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN" });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signup = (email, password) => {
    console.log("SignUp");
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    console.log(`auth: ${auth}`);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleLoginButtonClick = () => {
    setSubmitFunc(() => login);
    setOpen(true);
  };

  const handleSignupButtonClick = () => {
    setSubmitFunc(() => signup);
    setOpen(true);
  };

  return (
    <main className="login">
      <button className="login__button" onClick={handleLoginButtonClick}>
        Login
      </button>
      <button className="login__button" onClick={handleSignupButtonClick}>
        Sign up
      </button>
      <SignupModal open={open} setOpen={setOpen} submitFunc={submitFunc} />
    </main>
  );
};
