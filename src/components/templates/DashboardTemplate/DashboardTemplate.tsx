import type { FC } from "react";
import { Layout } from "../../atoms/Layout";
import { ProcessSection } from "../../organism/ProcessSection";
import { TemplatesSection } from "../../organism/TemplatesSection";
import { TitleSection } from "../../organism/TitleSection/TitleSection";

type DashboardTemplateProps = {
  onNewProcessClick?: () => void;
  onNewTemplateClick?: () => void;
};

export const DashboardTemplate: FC<DashboardTemplateProps> = ({
  onNewProcessClick,
  onNewTemplateClick,
}) => {
  return (
    <Layout>
      <TitleSection title="Dashboard" />

      <ProcessSection onNewProcessClick={onNewProcessClick} />

      <TemplatesSection onNewTemplateClick={onNewTemplateClick} />
    </Layout>
  );
};
