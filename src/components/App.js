import React from "react";
import "./app.css";
import { Header } from "./header/header";
import { Routes, Route } from "react-router-dom";
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "../routes";

export const App = () => {
  const LOGGED = false;
  const routes = LOGGED ? PRIVATE_ROUTES : PUBLIC_ROUTES;
  console.log(routes);
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
