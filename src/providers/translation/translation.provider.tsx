import * as React from 'react';
import { i18n } from 'i18next';
import { Language } from './translation.language';
import { I18nextProvider } from 'react-i18next';
import { TranslationKeysContext } from './translation.context';
import { createI18n } from './translation.i18n';

type TranslationProviderProps = {
  lang: Language;
  pathToLocales: string;
  translationKeys: any;
};

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
  lang,
  pathToLocales,
  translationKeys,
  children,
}) => {
  const i18nInstance = React.useMemo<i18n>(() => createI18n(lang, pathToLocales), [lang, pathToLocales]);

  React.useEffect(() => {
    i18nInstance.changeLanguage(lang);
  }, [i18nInstance, lang]);

  return (
    <I18nextProvider i18n={i18nInstance}>
      <TranslationKeysContext.Provider value={translationKeys}>
        <React.Suspense fallback={<>Loading...</>}>{children}</React.Suspense>
      </TranslationKeysContext.Provider>
    </I18nextProvider>
  );
};
