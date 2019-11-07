import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from './styled-components';

import { theme } from './app.theme';
import { fontFaces } from './app.fonts';

import { GeneralLayout } from './layouts/general-layout';
import { Mode } from './app.model';
import { TagsHeader } from './common';
import { Header, Home } from './pods';

type GlobalStyleProps = {
  mode: Mode;
};

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${fontFaces}
  :root{
    font-size: ${({ theme: { typography } }): string => `${typography.fontSize}`};
  }

  body{
    box-sizing: border-box;
    margin: 0;
    padding: ${({ theme: { spacing } }) => spacing(2)}px;
    font-family: ${({ theme: { typography } }): string => typography.fontFamily};
    color: ${({ mode, theme: { palette } }): string => palette[mode].text};
    background-color: ${({ mode, theme: { palette } }): string => palette[mode].background}
    transition: color 0.5s ease-out, background 0.5s ease-out
  }
`;

type AppProps = {};

export const App: React.FC<AppProps> = () => {
  const [mode, setMode] = React.useState<Mode>('light');
  const handleMode = () => setMode(mode === 'light' ? 'dark' : 'light');

  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle mode={mode} />
          <TagsHeader mode={mode} theme={theme} />
          <GeneralLayout
            Header={<Header mode={mode} handleMode={handleMode} />}
            Content={<Home mode={mode} />}
            Footer={<>Made with love ❤️ by frangaliana © 2019 frangaliana. All Rights Reserved.</>}
          ></GeneralLayout>
        </>
      </ThemeProvider>
    </>
  );
};
