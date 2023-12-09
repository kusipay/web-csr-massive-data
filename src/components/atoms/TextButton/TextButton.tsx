import type { FC, PropsWithChildren } from "react";

type TextButtonProps = PropsWithChildren & {
  onClick?: () => void;
};

export const TextButton: FC<TextButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};
