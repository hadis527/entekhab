import React from "react";
import "./App.css";
import { ThemeProvider} from "styled-components";
import { theme } from "./utils/Theme";
import AppContext from './context/AppContext'
import { GlobalStyle } from "./utils/GlobalStyle";
import DisplayLocations from "./pages/home/index"
import AppRoute from "./route/index";

function App() {
  return (
    <AppContext.Provider>
      <ThemeProvider theme={theme}>
        {/* <DisplayLocations /> */}
        <AppRoute />
        <GlobalStyle />
      </ThemeProvider>
    </AppContext.Provider>

  );
}

export default App;
 
 