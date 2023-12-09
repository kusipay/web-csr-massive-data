import type { FC, PropsWithChildren } from "react";

type RoundedButton = PropsWithChildren & {
  size?: "big" | "normal" | "small";
  onClick?: () => void;
};

export const RoundedButton: FC<RoundedButton> = ({
  children,
  size = "normal",
  onClick = () => {},
}) => {
  const sizeClassName =
    size === "big" ? "text-lg" : size === "normal" ? "text-base" : "text-sm";

  return (
    <button
      type="button"
      className={`bg-black text-white px-8 p-2 rounded-full ${sizeClassName}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
