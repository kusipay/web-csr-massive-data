import type { FC } from "react";
import { StepArray } from "../../molecules/StepArray/StepArray";

type StepperProps = {
  step: number;
};

export const Stepper: FC<StepperProps> = ({ step }) => {
  return (
    <div className="w-full flex justify-center mt-4">
      <StepArray numberOfStepIndicators={3} selectedNumber={step} />
    </div>
  );
};
