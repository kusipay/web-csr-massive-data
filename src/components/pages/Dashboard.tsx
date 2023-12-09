import type { FC } from "react";
import { Layout } from "../atoms/Layout";
import { DashboardHeader } from "../organism/DashboardHeader";
import { ProcessSection } from "../organism/ProcessSection";
import { TemplatesSection } from "../organism/TemplatesSection";

export const Dashboard: FC = () => {
  return (
    <Layout>
      <DashboardHeader />

      <ProcessSection />

      <TemplatesSection />
    </Layout>
  );
};
