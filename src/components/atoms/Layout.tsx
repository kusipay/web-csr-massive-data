import type { FC, PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren;

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="flex justify-center w-full">
    <div className="w-full max-w-screen-2xl">{children}</div>
  </div>
);
