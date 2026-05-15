import { variables as colorVars } from '../tokens/color/variables';
import { variables as typographyVars } from '../tokens/typography/variables'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${colorVars}
  ${typographyVars}
`;