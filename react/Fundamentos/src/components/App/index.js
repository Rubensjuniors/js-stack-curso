import React, { useContext } from "react";

import { Layout } from "../Layout";
import GlobalStyle from '../../styles/global'
import { ThemeProvider } from "styled-components";
import { useThemeContext } from "../../context/themeContext";

export function App() {
  const { currentTheme } = useThemeContext()

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}
