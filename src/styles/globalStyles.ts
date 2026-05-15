import { variables as colorVars } from '../tokens/color/variables';
import { variables as typographyVars } from '../tokens/typography/variables';
import { createGlobalStyle } from 'styled-components';

import regular from "./assets/fonts/lexend/Lexend-Regular.woff2";
import medium from "./assets/fonts/lexend/Lexend-Medium.woff2";
import bold from "./assets/fonts/lexend/Lexend-Bold.woff2";

export const GlobalStyles = createGlobalStyle`
  ${colorVars}
  ${typographyVars}

  @font-face {
    font-family: "Lexend";
    src: url(${regular}) format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Lexend";
    src: url(${medium}) format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Lexend";
    src: url(${bold}) format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: "Lexend", sans-serif;
  }
`;