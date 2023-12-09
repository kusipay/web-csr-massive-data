import type { FC } from "react";

type RoundedButton = {
  text: string;
  size?: "big" | "normal" | "small";
  onClick?: () => void;
};

export const RoundedButton: FC<RoundedButton> = ({ text, size = "normal" }) => {
  const sizeClassName =
    size === "big" ? "text-lg" : size === "normal" ? "text-base" : "text-sm";

  return (
    <button
      type="button"
      className={`bg-black text-white px-8 p-2 rounded-full ${sizeClassName}`}
    >
      {text}
    </button>
  );
};
