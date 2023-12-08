import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Dashboard } from "./components/pages/Dashboard";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
);
