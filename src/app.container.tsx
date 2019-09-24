import * as React from 'react';
import { GlobalStyle, theme } from './app.theme';
import { ThemeProvider } from './styled-components';

type AppProps = {};

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
