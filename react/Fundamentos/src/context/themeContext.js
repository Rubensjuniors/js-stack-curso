import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

import PropTypes from "prop-types";

import * as themes from '../styles/themes/index'

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext)

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('savedTheme') ?? 'dark');

   const currentTheme = useMemo(() => {
      return themes[theme] ?? themes.dark
    }, [theme])


  function toggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    localStorage.setItem('savedTheme', theme)
  }, [theme])

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
