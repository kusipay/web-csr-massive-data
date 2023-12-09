import type { FC } from "react";
import { RoundedButton } from "../atoms/RoundedButton";
import { Grid } from "../atoms/Grid";
import { Card } from "../atoms/Card";
import { Text } from "../atoms/Text/Text";

type ProcessSectionProps = {
  onNewProcessClick?: () => void;
};

export const ProcessSection: FC<ProcessSectionProps> = ({
  onNewProcessClick = () => {},
}) => {
  return (
    <div className="mt-4">
      <div className="ml-4">
        <Text type="subtitle">Tus procesos</Text>
      </div>

      <div className="mx-4 mt-4 flex justify-center">
        <RoundedButton size="big" onClick={onNewProcessClick}>
          Nuevo proceso
        </RoundedButton>
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
