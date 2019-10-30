import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from './styled-components';

import { theme } from './app.theme';
import { fontFaces } from './app.fonts';
import { Mode } from './app.model';
import { ModeSwitch, TagsHeader } from './common';
import { GeneralLayout } from './layouts/general-layout';

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
    padding: 2em;
    font-family: ${({ theme: { typography } }): string => typography.fontFamily};
    color: ${({ mode, theme: { palette } }): string => palette[mode].font};
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
            Header={
              <>
                <h1>frangaliana</h1>
                <ModeSwitch toggleMode={handleMode} mode={mode} />
              </>
            }
            Content={<>Hi, I&apos;m frangaliana@fg93! Contact me at fjgalianacano@gmail.com</>}
            Footer={<>Made with love ❤️ by frangaliana © 2019 frangaliana. All Rights Reserved.</>}
          ></GeneralLayout>
        </>
      </ThemeProvider>
    </>
  );
};
