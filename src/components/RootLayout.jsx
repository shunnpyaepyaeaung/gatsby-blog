import React from "react";
import "../styles/global.scss";
import "prismjs/themes/prism-tomorrow.css";
import "react-toggle/style.css";
import "./src/styles/global.scss";
import "prismjs/themes/prism-tomorrow.css";

const RootLayout = ({ children }) => {
  return <div className="theme-provider">{children}</div>;
};

export default RootLayout;
