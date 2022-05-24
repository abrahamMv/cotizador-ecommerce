import { FC } from "react";
import { PropsChildren } from "../../interfaces";

export const Layout: FC<PropsChildren> = ({ children }) => {
  return (
    <>
      <h1>layout</h1>
      <main>{children}</main>
    </>
  );
};
