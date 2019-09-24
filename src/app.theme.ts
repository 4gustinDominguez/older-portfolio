import { createGlobalStyle } from './styled-components';

export const theme = {
  fonts: {
    fontFamily: `'Quicksand', sans-serif`,
  },
};

export type Theme = typeof theme;

export const GlobalStyle = createGlobalStyle`
body {
  font-family: ${({ theme }): string => theme.fonts.fontFamily}
}
`;
