import { cssVariables } from '../tokens/color/variables';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${cssVariables}
`;