import React from "react";
import "./app.css";
import { Header } from "./header/header";
import { Main } from "./main/main";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};
