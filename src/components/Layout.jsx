import React from "react";
import AppHeader from "./AppHeader";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="container is-max-desktop">
      <AppHeader />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
