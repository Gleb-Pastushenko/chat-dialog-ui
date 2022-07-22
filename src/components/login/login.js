import React from "react";
import "./login.css";
import { GoogleAuthProvider } from "firebase/auth";
import { useSelector } from "react-redux";
import SignupModal from "./signupModal/signupModal";

export const Login = () => {
  const [open, setOpen] = React.useState(false);
  const [submitFunc, setSubmitFunc] = React.useState(null);
  const auth = useSelector((state) => state.firebaseAuth);
  const provider = new GoogleAuthProvider();

  const login = () => {};

  const signup = () => {};

  const handleLoginButtonClick = () => {
    setOpen(true);
    setSubmitFunc(login);
  };

  const handleSignupButtonClick = () => {
    setOpen(true);
    setSubmitFunc(signup);
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
