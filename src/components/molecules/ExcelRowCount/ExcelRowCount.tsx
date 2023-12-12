import type { FC, PropsWithChildren } from "react";
import { Text } from "../../atoms/Text/Text";
type ExcelRowCountProps = PropsWithChildren;

export const ExcelRowCount: FC<ExcelRowCountProps> = ({ children }) => {
  return <Text type="paragraph">{children}</Text>;
};
