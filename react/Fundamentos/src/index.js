import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";

import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
