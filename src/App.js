import { Header } from "./components/Header/Header";
import { ThemeProvider } from "styled-components";

import theme from "./styles/Theme";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
