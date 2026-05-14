import { cssVariables } from './../tokens/css-variables';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${cssVariables}
`;