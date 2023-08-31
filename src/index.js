import React from "react";
import "../src/styles/main/index.css";
import App from "./App";
import { render } from "react-dom";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);