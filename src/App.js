import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";
import history from "./history";
import Routes from "./routes";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <GlobalStyle />

      <Routes history={history} />
    </BrowserRouter>
  );
}
