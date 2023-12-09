import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MainPageRouter } from "./components/pages/MainPageRouter/MainPageRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainPageRouter />
  </React.StrictMode>,
);
