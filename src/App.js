import { ThemeProvider } from "styled-components";

import theme from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>SFRC</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
