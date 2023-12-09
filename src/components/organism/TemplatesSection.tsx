import { FC } from "react";
import { Subtitle } from "../atoms/Subtitle";
import { RoundedButton } from "../atoms/RoundedButton";
import { Grid } from "../atoms/Grid";
import { Card } from "../atoms/Card";

type TemplatesSectionProps = {
  onNewTemplateClick?: () => void;
};

export const TemplatesSection: FC<TemplatesSectionProps> = ({
  onNewTemplateClick = () => {},
}) => {
  return (
    <div className="mt-10">
      <div className="ml-4">
        <Subtitle text="Tus plantillas" />
      </div>

      <div className="mx-4 mt-4 flex justify-center">
        <RoundedButton size="big" onClick={onNewTemplateClick}>
          Nueva plantilla
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
