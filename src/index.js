import React from "react";
import "../src/styles/main/index.css";
import App from "./App";
import { render } from "react-dom";

// Registra il service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registrato: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registrazione fallita: ', registrationError);
      });
  });
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
