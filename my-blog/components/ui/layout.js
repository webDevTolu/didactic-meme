import { Fragment } from "react";
import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Nav />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
