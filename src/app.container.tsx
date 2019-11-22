import * as React from 'react';

import { tkeys } from './core/translation';

import { TranslationProvider, ThemeStyledProvider } from './providers';
import { lightTheme, darkTheme } from './app.theme';

import { GeneralLayout } from './layouts';
import { Header, Home, Footer } from './pods';

import { useThemeMode } from './app.hooks';

type AppProps = {};

export const App: React.FC<AppProps> = () => {
  const { mode, toggleMode } = useThemeMode();
  const theme = mode === 'light' ? lightTheme : darkTheme;

  /**
    const [language, setLanguage] = React.useState<Language>('en');
    const toggleLanguage = (code: Language) => setLanguage(code);
  */

  return (
    <ThemeStyledProvider theme={theme}>
      <TranslationProvider lang={'en'} pathToLocales={'assets/locales'} translationKeys={tkeys}>
        <GeneralLayout
          Header={<Header mode={mode} toggleMode={toggleMode} />}
          Content={<Home />}
          Footer={<Footer />}
        ></GeneralLayout>
      </TranslationProvider>
    </ThemeStyledProvider>
  );
};
