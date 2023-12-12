import type { FC } from "react";
import { Layout } from "../../atoms/Layout";
import { TitleSection } from "../../organism/TitleSection/TitleSection";
import { NextButtonSection } from "../../organism/NextButtonSection/NextButtonSection";
import { ExcelInfo } from "../../organism/ExcelInfo/ExcelInfo";

type ReviewDataStepProps = {
  todo?: string;
  onClick?: () => void;
};

export const ReviewDataStep: FC<ReviewDataStepProps> = ({
  onClick = () => {},
}) => {
  return (
    <Layout>
      <TitleSection title="Revisar datos del archivo" />
      <ExcelInfo />
      <NextButtonSection onClick={onClick} />
    </Layout>
  );
};
