import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastContextProvider } from "./components/toasts/ToastContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContextProvider>
        <App />
      </ToastContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
