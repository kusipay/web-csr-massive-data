import type { FC } from "react";
import { Text } from "../../atoms/Text/Text";

type TitleSectionProps = {
  title: string;
};

export const TitleSection: FC<TitleSectionProps> = ({ title }) => {
  return (
    <div className="ml-4 mt-8">
      <Text type="title">{title}</Text>
    </div>
  );
};
