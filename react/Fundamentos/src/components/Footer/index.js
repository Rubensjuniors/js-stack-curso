import React from "react";
import { Container } from "./styles";
import { useThemeContext } from "../../context/themeContext";

export function Footer() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Container>
      <p>JS Blog. Todos os direitros reservados</p>
      <button type="button" onClick={() => toggleTheme()}>{theme === 'dark' ? '🌞' : '🌑'}</button>
    </Container>
  );
}
