import { type FC } from "react";
import { Layout } from "../../atoms/Layout";
import { TemplateList } from "../../organism/TemplateList/TemplateList";

type NewProcessTemplateProps = {
  todo?: string;
};

export const NewProcessTemplate: FC<NewProcessTemplateProps> = () => {
  return (
    <Layout>
      <TemplateList />
    </Layout>
  );
};
