import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DashboardTemplate } from "./components/templates/DashboardTemplate/DashboardTemplate";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DashboardTemplate
      onNewProcessClick={() => alert("new process")}
      onNewTemplateClick={() => alert("new template")}
    />
  </React.StrictMode>,
);
