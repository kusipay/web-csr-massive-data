import type { FC } from "react";
import { Layout } from "../../atoms/Layout";
import { TitleSection } from "../../organism/TitleSection/TitleSection";
import { CsvUploader } from "../../organism/CsvUploader/CsvUploader";
import { NextButtonSection } from "../../organism/NextButtonSection/NextButtonSection";
import { ReviewDataStep } from "../ReviewDataStep/ReviewDataStep";
import { ConfirmSendStep } from "../ConfirmSendStep/ConfirmSendStep";

type DataUploadProcessProps = {
  todo?: string;
};

export const DataUploadProcess: FC<DataUploadProcessProps> = () => {
  return (
    <Layout>
      <TitleSection title="Nuevo proceso" />

      <CsvUploader />

      <NextButtonSection />

      <ReviewDataStep />
      <ConfirmSendStep />
    </Layout>
  );
};
