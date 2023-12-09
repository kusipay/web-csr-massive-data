import type { FC, PropsWithChildren } from "react";

type CardProps = PropsWithChildren;

export const Card: FC<CardProps> = ({ children }) => (
  <div className="bg-white rounded-[24px] shadow-lg p-5">{children}</div>
);
