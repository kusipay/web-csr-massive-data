import type { FC, PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren;

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="w-full flex justify-center">
    <div className="w-full max-w-screen-2xl">{children}</div>
  </div>
);
