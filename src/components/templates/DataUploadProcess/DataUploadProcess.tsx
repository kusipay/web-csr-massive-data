import { useState, type FC } from "react";
import { Layout } from "../../atoms/Layout";
import { TitleSection } from "../../organism/TitleSection/TitleSection";
import { CsvUploader } from "../../organism/CsvUploader/CsvUploader";
import { NextButtonSection } from "../../organism/NextButtonSection/NextButtonSection";
import { ReviewDataStep } from "../ReviewDataStep/ReviewDataStep";
import { ConfirmSendStep } from "../ConfirmSendStep/ConfirmSendStep";
import { Stepper } from "../../organism/Stepper/Stepper";

type DataUploadProcessProps = {
  todo?: string;
};

export const DataUploadProcess: FC<DataUploadProcessProps> = () => {
  const [step, setStep] = useState(0);

  return (
    <Layout>
      <TitleSection title="Nuevo proceso" />

      <Stepper step={step} />

      {step === 0 && (
        <>
          <CsvUploader />

          <NextButtonSection onClick={() => setStep(1)} />
        </>
      )}

      {step === 1 && <ReviewDataStep onClick={() => setStep(2)}  />}

      {step === 2 && <ConfirmSendStep />}
    </Layout>
  );
};
