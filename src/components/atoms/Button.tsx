import { FC } from "react";

type ButtonProps = {
  name: string;
  onClick: () => void;
};

export const Button: FC<ButtonProps> = ({ onClick, name }) => (
  <button onClick={onClick}>{name}</button>
);
