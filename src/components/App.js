import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Header } from "./header/header";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux/es/exports";
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "../routes";
import "./app.css";

export default function App() {
  const dispatch = useDispatch();
  const { auth, isLogged } = useSelector((state) => state);
  const routes = isLogged ? PRIVATE_ROUTES : PUBLIC_ROUTES;

  useEffect(() => {
    const disableListenerAuth = onAuthStateChanged(auth, (user) => {
      dispatch({ type: user ? "LOGIN" : "LOGOUT" });
      dispatch({ type: "GET_USER", payload: user });
      dispatch({
        type: "SET_DISABLE_LISTENER_AUTH",
        payload: disableListenerAuth,
      });
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Routes>
    </div>
  );
}
