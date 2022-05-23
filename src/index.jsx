import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./vendor/ArialRounded.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));

// const store = configureStore();

root.render(
  <React.StrictMode>
    {/* <Provider> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);
reportWebVitals();
