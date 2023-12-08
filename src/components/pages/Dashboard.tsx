import { FC } from "react";
import { Button } from "../atoms/Button";

export const Dashboard: FC = () => {
  return (
    <div>
      <Button name="first" onClick={() => alert("hello")} />
      <Button name="second" onClick={() => alert("world")} />
    </div>
  );
};
