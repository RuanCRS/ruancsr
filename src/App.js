import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";

import Menu from "./pages/Top";

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Menu></Menu>
    <div className="App" />
  </Fragment>
);

export default App;
