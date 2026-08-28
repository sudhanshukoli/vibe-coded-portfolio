import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ToggleProvider } from "./context/ModeToggle.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToggleProvider >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleProvider>
  </React.StrictMode>
);
