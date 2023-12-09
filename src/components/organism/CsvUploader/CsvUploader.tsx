import type { FC } from "react";
import { TextButton } from "../../atoms/TextButton/TextButton";
import { FileInput } from "../../atoms/FileInput/FileInput";
import { Text } from "../../atoms/Text/Text";

type CsvUploaderProps = object;

export const CsvUploader: FC<CsvUploaderProps> = () => {
  return (
    <div className="mx-4 mt-4">
      <Text type="paragraph">
        Selecciona tu excel/csv para iniciar proceso, sino tienes uno listo
        puedes descargar esta{" "}
        <TextButton onClick={() => alert("descargar template aqui")}>
          <b>plantilla</b>
        </TextButton>
      </Text>

      <div className="mt-4">
        <FileInput />
      </div>
    </div>
  );
};
