import type { FC } from "react";
import { TemplatesSection } from "../TemplatesSection";

type TemplateListProps = {
  onNewTemplateClick?: () => void;
};

export const TemplateList: FC<TemplateListProps> = () => {
  return <TemplatesSection />;
};
