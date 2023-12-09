import type { FC } from "react";
import { Title } from "../atoms/Title";

type DashboardHeaderProps = object;

export const DashboardHeader: FC<DashboardHeaderProps> = () => {
  return (
    <div className="ml-4 mt-10">
      <Title text="Dashboard" />
    </div>
  );
};
