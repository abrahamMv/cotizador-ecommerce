import { FC } from "react";
import { PropsChildren } from "../../interfaces";
import { Navbar } from "../UI";

export const Layout: FC<PropsChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
