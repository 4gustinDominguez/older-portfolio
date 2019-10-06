import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from './styled-components';

import { theme } from './app.theme';
import { fontFaces } from './app.fonts';
import { Mode } from './app.model';
import { ModeSwitch } from './common';
import { GeneralLayout } from './layouts/general-layout';

type GlobalStyleProps = {
  mode: Mode;
};

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${fontFaces}
  body{
    font-family: ${({ theme: { typography } }): string => typography.fontFamily};
    font-size: ${({ theme: { typography } }): string => `${typography.fontSizes[1]}`};
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
          <GeneralLayout
            HeaderChildren={
              <>
                <h1>frangaliana</h1>
                <ModeSwitch toggleMode={handleMode} mode={mode} />
              </>
            }
            ContentChildren={<>Hi, I'm frangaliana! Contact me at fjgalianacano@gmail.com</>}
            FooterChildren={<>Made with love ❤️ by frangaliana © 2019 frangaliana. All Rights Reserved.</>}
          ></GeneralLayout>
        </>
      </ThemeProvider>
    </>
  );
};
