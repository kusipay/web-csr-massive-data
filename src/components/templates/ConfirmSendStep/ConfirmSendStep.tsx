import type { FC } from "react";
import { Layout } from "../../atoms/Layout";
import { TitleSection } from "../../organism/TitleSection/TitleSection";
import { DataSubmitButton } from "../../molecules/DataSubmitButton/DataSubmitButton";

type ConfirmSendStepProps = {
  todo?: string;
};

export const ConfirmSendStep: FC<ConfirmSendStepProps> = () => {
  return (
    <Layout>
      <TitleSection title="Confirmar envío a la base de datos" />
      <DataSubmitButton />
    </Layout>
  );
};
