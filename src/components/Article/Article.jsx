import React from "react";
import style from "./style.module.css";
import logo from "../../logo.svg";

export default function Article() {
  return (
    <div className={style.blank}>
      <img src={logo} className={style.logo} alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className={style.link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}
