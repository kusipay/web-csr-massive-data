import type { FC, PropsWithChildren } from "react";

type TextProps = PropsWithChildren & {
  type?: "title" | "subtitle" | "paragraph" | "span";
};

export const Text: FC<TextProps> = ({ type = "paragraph", children }) => {
  if (type === "title") return <h1 className="text-4xl">{children}</h1>;

  if (type === "subtitle") return <h2 className="text-3xl">{children}</h2>;

  if (type === "paragraph") return <p>{children}</p>;

  return <span>{children}</span>;
};
