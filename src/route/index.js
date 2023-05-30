import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about"
import routePaths from "./namespace";
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
          path="/about"
          element={
            <About/>
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
