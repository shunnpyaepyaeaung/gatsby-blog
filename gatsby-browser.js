import "./src/styles/global.scss";
import "prismjs/themes/prism-tomorrow.css";
import React from "react";
import RootLayout from "./src/components/RootLayout";

export const wrapRootElement = ({ element }) => <RootLayout />;
