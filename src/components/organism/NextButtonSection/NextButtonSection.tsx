import type { FC } from "react";
import { RoundedButton } from "../../atoms/RoundedButton";

type NextButtonSectionProps = object;

export const NextButtonSection: FC<NextButtonSectionProps> = () => {
  return (
    <div className="mx-4 mt-4">
      <RoundedButton>Siguiente</RoundedButton>
    </div>
  );
};
