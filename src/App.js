import React, { useState } from "react";

import theme from "./styles/Theme";

import { Header } from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
