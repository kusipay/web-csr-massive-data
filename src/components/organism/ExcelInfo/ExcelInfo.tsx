import type { FC } from "react";
import { Grid } from "../../atoms/Grid";
import { ListItem } from "../../molecules/ListItem/ListItem";
import { ExcelRowCount } from "../../molecules/ExcelRowCount/ExcelRowCount";
import { Text } from "../../atoms/Text/Text";

type ExcelInfoProps = object;

export const ExcelInfo: FC<ExcelInfoProps> = () => {
  const words = ["One", "Two", "Three", "Four", "Five", "Six"];
  return (
    <div className="mx-4 mt-4">
      <Text type="subtitle">Lista de variables identificados</Text>
      <Grid>
        {words.map((word, i) => (
          <ListItem key={i}>{word}</ListItem>
        ))}
      </Grid>

      <ExcelRowCount>cantidad de filas del excel:100</ExcelRowCount>
    </div>
  );
};
