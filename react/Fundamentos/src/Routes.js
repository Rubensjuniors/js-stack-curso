import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./pages/home";

export function Routes() {
  return (
    <BrowserRouter>
  <Route path="/" component={<Home />} />;
    </BrowserRouter>
  )
}
