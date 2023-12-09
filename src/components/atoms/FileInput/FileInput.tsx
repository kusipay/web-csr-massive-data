import type { ChangeEvent, FC } from "react";

type FileInputProps = {
  onFileChange?: (file: File) => void;
};

export const FileInput: FC<FileInputProps> = ({ onFileChange = () => {} }) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) {
      return undefined;
    }

    const firstFile = files[0];

    if (!firstFile) {
      return undefined;
    }

    onFileChange(firstFile);
  };

  return <input type="file" onChange={handleFileChange} />;
};
