import React, { createContext, useContext } from "react";

const themes = {
  light: {
    type: "light",
    fontColor: "#2b2c38",
    background: "#fff",
  },
  dark: {
    type: "dark",
    fontColor: "#dcdcdc",
    background: "#2v2c38",
  },
};

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={themes.dark}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
