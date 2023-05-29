import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";

const AppRoute = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          
          component={(props) =>
            <Home />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoute;
