import React from "react";
import "./app.css";
import { Header } from "./header/header";
import { Routes, Route } from "react-router-dom";
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "../routes";
import { useSelector } from "react-redux";

export const App = () => {
  const LOGGED = useSelector((state) => state.isLogged);
  const routes = LOGGED ? PRIVATE_ROUTES : PUBLIC_ROUTES;
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
};
