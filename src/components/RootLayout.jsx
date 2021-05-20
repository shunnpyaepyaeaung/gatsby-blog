import React from "react";
import "../styles/global.scss";
import "prismjs/themes/prism-tomorrow.css";
import "react-toggle/style.css";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ThemeProvider from "./ThemeProvider";

config.autoAddCss = false;
library.add(faSun, faMoon);

const RootLayout = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default RootLayout;
