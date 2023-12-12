import { useState, type FC } from "react";
import { DashboardTemplate } from "../../templates/DashboardTemplate/DashboardTemplate";
import { DataUploadProcess } from "../../templates/DataUploadProcess/DataUploadProcess";
import { NewProcessTemplate } from "../../templates/NewProcessTemplate/NewProcessTemplate";

export const MainPageRouter: FC = () => {
  const [page, setPage] = useState<"dashboard" | "process" | "template">(
    "dashboard",
  );

  if (page === "dashboard") {
    return (
      <DashboardTemplate
        onNewProcessClick={() => setPage("process")}
        onNewTemplateClick={() => setPage("template")}
      />
    );
  }
  if (page === "template") {
    return <NewProcessTemplate />;
  }

  return <DataUploadProcess />;
};
