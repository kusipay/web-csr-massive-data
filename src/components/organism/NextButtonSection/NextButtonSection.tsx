import type { FC } from "react";
import { RoundedButton } from "../../atoms/RoundedButton";

type NextButtonSectionProps = {
  onClick?: () => void;
};

export const NextButtonSection: FC<NextButtonSectionProps> = ({
  onClick = () => {},
}) => {
  return (
    <div className="mx-4 mt-4">
      <RoundedButton onClick={onClick}>Siguiente</RoundedButton>
    </div>
  );
};
