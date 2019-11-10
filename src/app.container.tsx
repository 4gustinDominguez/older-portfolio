import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from './styled-components';

import { lightTheme, darkTheme } from './app.theme';
import { fontFaces } from './app.fonts';

import { GeneralLayout } from './layouts/general-layout';
import { TagsHeader } from './common';
import { Header, Home } from './pods';

import { useThemeMode } from './app.hooks';

const GlobalStyle = createGlobalStyle`
  ${fontFaces}
  :root{
    font-size: ${({ theme: { typography } }): string => `${typography.fontSize}`};
  }

  body{
    box-sizing: border-box;
    margin: 0;
    padding: ${({ theme: { spacing } }) => spacing(2)}px;
    font-family: ${({ theme: { typography } }): string => typography.fontFamily};
    color: ${({ theme: { palette } }): string => palette.text};
    background-color: ${({ theme: { palette } }): string => palette.background};
    transition: color ${({ theme: { transition } }) => transition[1]}, background ${({ theme: { transition } }) =>
  transition[1]};
  }
`;

type AppProps = {};

export const App: React.FC<AppProps> = () => {
  const { mode, toggleMode, componentMounted } = useThemeMode();
  const theme = mode === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <TagsHeader theme={theme} />
          <GeneralLayout
            Header={<Header mode={mode} toggleMode={toggleMode} />}
            Content={<Home />}
            Footer={<>Made with love ❤️ by frangaliana © 2019 frangaliana. All Rights Reserved.</>}
          ></GeneralLayout>
        </>
      </ThemeProvider>
    </>
  );
};
