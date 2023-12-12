import type { FC } from "react";

type StepIndicatorProps = {
  n: number;
  selected?: boolean;
};

export const StepIndicator: FC<StepIndicatorProps> = ({
  n,
  selected = false,
}) => {
  const border = selected
    ? "border-4 border-green-600 font-bold text-green-600"
    : "border-4 border-slate-500 font-normal text-slate-500";

  return <div className={`flex shrink-0 grow-0 justify-center items-center w-16 h-16 rounded-full text-3xl ${border}`}>{n}</div>;
};
