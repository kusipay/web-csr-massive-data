import type { FC, PropsWithChildren } from "react";

type GridProps = PropsWithChildren;

export const Grid: FC<GridProps> = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {children}
  </div>
);
