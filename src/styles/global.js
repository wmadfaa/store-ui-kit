import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    overflow-y: auto;
    overflow-x: hidden;

    * {
      box-sizing: border-box;
    }
  }
`;

export default GlobalStyle;
