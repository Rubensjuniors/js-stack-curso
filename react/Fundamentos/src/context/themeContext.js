import React, { createContext, useContext, useMemo, useState } from "react";

import PropTypes from "prop-types";

import * as themes from '../styles/themes/index'

export const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext)

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");

   const currentTheme = useMemo(() => {
      return themes[theme] ?? themes.light
    }, [theme])


  function toggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        currentTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

