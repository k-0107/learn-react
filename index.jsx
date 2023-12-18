import React from "react";
import ReactDOM from "react-dom/client";
import "./public/stylesheet.css";
import App from "./src/components/App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
