import React from "react";
import Toggle from "react-toggle";

const ThemeToggle = ({ className }) => {
  return <Toggle className={`day-night-toggle ${className}`} />;
};

export default ThemeToggle;
