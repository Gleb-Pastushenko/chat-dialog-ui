import React from "react";
import "./app.css";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { Main } from "./main/main";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
