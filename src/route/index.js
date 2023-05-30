import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Character from "../pages/character";

const AppRoute = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={<Home />
          }
        />
        <Route
          path="/characters/:id"
          element={
            <Character  />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoute;
