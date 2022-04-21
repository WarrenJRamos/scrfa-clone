import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    ${"" /* FIXME */}
    font-family: "Open Sans", sans-serif;
  }

  .container {
    max-width: 1200px;
    padding: 0 1.5rem;
    margin: auto;
  }

`;
