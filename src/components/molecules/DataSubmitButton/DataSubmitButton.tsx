import type { FC } from "react";
import { RoundedButton } from "../../atoms/RoundedButton";

type DataSubmitButtonProps = object;

export const DataSubmitButton: FC<DataSubmitButtonProps> = () => {
  return (
    <div className="mx-4 mt-4">
      <RoundedButton>Enviar</RoundedButton>
    </div>
  );
};
