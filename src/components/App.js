import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Header } from "./header/header";
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "../routes";
import "./app.css";

export const App = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const routes = isLogged ? PRIVATE_ROUTES : PUBLIC_ROUTES;

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
