import React from "react";
import "../styles/global.scss";
import "prismjs/themes/prism-tomorrow.css";
import "react-toggle/style.css";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ThemeProvider, { useTheme } from "./ThemeProvider";

config.autoAddCss = false;
library.add(faSun, faMoon);

const MainWrapper = ({ children }) => {
  const { theme } = useTheme();
  return (
    <>
      <div className={`main-wrapper ${theme.type}`}>{children}</div>
      <style>
        {`
          html, body{
            background: ${theme.background};
            color: ${theme.fontColor};
            transition: color 0.2s ease-out, background 0.2s ease-out;
          }
        `}
      </style>
    </>
  );
};

const RootLayout = ({ children }) => {
  return (
    <ThemeProvider>
      <MainWrapper>{children}</MainWrapper>
    </ThemeProvider>
  );
};

export default RootLayout;
