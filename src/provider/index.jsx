import React from "react";
import ThemeProvider from "./ThemeProvider";

const Providers = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
