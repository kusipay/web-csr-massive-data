import { useState, type FC } from "react";
import { DashboardTemplate } from "../../templates/DashboardTemplate/DashboardTemplate";
import { NewProcessTemplate } from "../../templates/NewProcessTemplate/NewProcessTemplate";

export const MainPageRouter: FC = () => {
  const [page, setPage] = useState<"dashboard" | "process">("dashboard");

  if (page === "dashboard") {
    return (
      <DashboardTemplate
        onNewProcessClick={() => setPage("process")}
        onNewTemplateClick={() => alert("new template")}
      />
    );
  }

  return <NewProcessTemplate />;
};
