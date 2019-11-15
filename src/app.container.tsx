import * as React from 'react';

import { ThemeProvider, createGlobalStyle } from './styled-components';
import { tkeys, defaultLanguage, localesPath } from './core/translation';

import { TranslationProvider, Language } from './providers';
import { lightTheme, darkTheme } from './app.theme';
import { fontFaces } from './app.fonts';

import { GeneralLayout } from './layouts/general-layout';
import { TagsHeader } from './common';
import { Header, Home, Footer } from './pods';

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
  const { mode, toggleMode } = useThemeMode();
  const theme = mode === 'light' ? lightTheme : darkTheme;

  /*
  const [language, setLanguage] = React.useState<Language>('en');
  const toggleLanguage = (changed: boolean) => setLanguage(changed ? 'en' : 'es');
  */

  return (
    <>
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={<>Loading...</>}>
          <TranslationProvider lang={defaultLanguage} pathToLocales={'assets/localization'} translationKeys={tkeys}>
            <GlobalStyle />
            <TagsHeader theme={theme} />
            <GeneralLayout
              Header={<Header mode={mode} toggleMode={toggleMode} />}
              Content={<Home />}
              Footer={
                <>
                  {/*<button onClick={() => toggleLanguage(language === 'en' ? false : true)}>Idioma</button>*/}
                  <Footer />
                </>
              }
            ></GeneralLayout>
          </TranslationProvider>
        </React.Suspense>
      </ThemeProvider>
    </>
  );
};
