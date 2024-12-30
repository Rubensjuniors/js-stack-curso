import React from "react";
import { Container } from "./styled";
import { useThemeContext } from "../../context/themeContext";

export function Header() {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <Container>
      <h1>JS Blog</h1>
      <button type="button" onClick={() => toggleTheme()}>{theme === 'dark' ? '🌞' : '🌑'}</button>
    </Container>
  );
}
