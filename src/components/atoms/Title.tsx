import type { FC } from "react";

type TitleProps = {
  text: string;
};

export const Title: FC<TitleProps> = ({ text }) => (
  <h1 className="text-4xl">{text}</h1>
);
