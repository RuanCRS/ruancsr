import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import News from "../pages/News";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/noticias" exact component={News} />
    </Switch>
  );
}
