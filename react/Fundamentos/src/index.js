import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";

import GlobalStyle from "./styles/global";
import { ThemeContextProvider } from "./context/themeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <GlobalStyle />
    <App />
  </ThemeContextProvider>
);
