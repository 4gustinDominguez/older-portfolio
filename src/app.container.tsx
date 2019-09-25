import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from './styled-components';

import { theme } from './app.theme';
import { fontFaces } from './app.fonts';

type AppProps = {};

const GlobalStyle = createGlobalStyle`
  ${fontFaces}
  body{
    font-family: ${({ theme }): string => theme.familyFont};
  }
`;

export const App: React.FunctionComponent<AppProps> = () => (
  <>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <>{`Hi, I'm frangaliana! Contact me at fjgalianacano@gmail.com`}</>
      </>
    </ThemeProvider>
  </>
);
