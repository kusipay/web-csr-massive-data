import type { FC } from "react";
import { StepIndicator } from "../../atoms/StepIndicator/StepIndicator";

type StepArrayProps = {
  numberOfStepIndicators: number;
  selectedNumber: number;
};

export const StepArray: FC<StepArrayProps> = ({
  numberOfStepIndicators: n,
  selectedNumber,
}) => {
  return (
    <div className="flex gap-4 md:gap-8 lg:gap-16">
      {new Array(n).fill(0).map((_, i) => (
        <StepIndicator key={i} n={i + 1} selected={i === selectedNumber} />
      ))}
    </div>
  );
};
