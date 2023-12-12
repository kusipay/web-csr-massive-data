import type { FC, PropsWithChildren } from "react";
import { Text } from "../../atoms/Text/Text";

type ListItemProps = PropsWithChildren;

export const ListItem: FC<ListItemProps> = ({ children }) => {
  return (
    <li className="list-none">
      <Text>{children}</Text>
    </li>
  );
};
