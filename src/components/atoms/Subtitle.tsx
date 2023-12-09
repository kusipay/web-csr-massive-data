import type { FC } from "react";

type SubtitleProps = {
  text: string;
};

export const Subtitle: FC<SubtitleProps> = ({ text }) => (
  <h2 className="text-3xl">{text}</h2>
);
