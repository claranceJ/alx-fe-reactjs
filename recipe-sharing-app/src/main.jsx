// src/main.jsx or src/index.jsx
import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);
