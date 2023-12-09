import type { FC } from "react";
import { Subtitle } from "../atoms/Subtitle";
import { RoundedButton } from "../atoms/RoundedButton";
import { Grid } from "../atoms/Grid";
import { Card } from "../atoms/Card";

type ProcessSectionProps = object;

export const ProcessSection: FC<ProcessSectionProps> = () => {
  return (
    <div className="mt-4">
      <div className="ml-4">
        <Subtitle text="Tus procesos" />
      </div>

      <div className="mx-4 mt-4 flex justify-center">
        <RoundedButton
          text="Nuevo proceso"
          size="big"
          onClick={() => alert("nuevo proceso")}
        />
      </div>

      <div className="mt-4 mx-4">
        <Grid>
          {new Array(6).fill(0).map((_, i) => (
            <Card key={i}>{i}</Card>
          ))}
        </Grid>
      </div>
    </div>
  );
};
