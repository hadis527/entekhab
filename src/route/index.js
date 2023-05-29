import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import routePaths from "./namespace";

const AppRoute = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={routePaths.characters}
          exact
          component={(props) =>
            <Home {...props} />
          }
        />
      </Switch>
    </BrowserRouter>
  );
};
export default AppRoute;
