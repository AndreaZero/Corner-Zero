import React from "react";
import "../src/styles/main/index.css";
import App from "./App";
import { render } from "react-dom";                 // add this

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);