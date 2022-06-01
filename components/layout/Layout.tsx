import { FC } from "react";
import { PropsChildren } from "../../interfaces";
import { Navbar, Footer } from "../UI";

export const Layout: FC<PropsChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div style={{ marginTop: "1rem" }}>
        <Footer />
      </div>
    </>
  );
};
