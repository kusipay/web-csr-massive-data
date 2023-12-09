import { type FC } from "react";
import { Layout } from "../../atoms/Layout";
import { TitleSection } from "../../organism/TitleSection/TitleSection";
import { CsvUploader } from "../../organism/CsvUploader/CsvUploader";
import { NextButtonSection } from "../../organism/NextButtonSection/NextButtonSection";

type NewProcessTemplateProps = {
  todo?: string;
};

export const NewProcessTemplate: FC<NewProcessTemplateProps> = () => {
  return (
    <Layout>
      <TitleSection title="Nuevo proceso" />

      <CsvUploader />

      <NextButtonSection />
    </Layout>
  );
};
