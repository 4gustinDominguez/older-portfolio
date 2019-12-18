import i18n from 'i18next';
import i18nBackend from 'i18next-xhr-backend';

import { Language } from './translation.language';
import { initReactI18next } from 'react-i18next';

const defaultLanguage: Language = 'en';

export const createI18n = (lang: Language, pathToLocale: string) => {
  const i18nInstance = i18n
    .createInstance()
    .use(initReactI18next)
    .use(i18nBackend);

  i18nInstance.init({
    lng: lang,
    fallbackLng: defaultLanguage,
    backend: {
      loadPath: `${pathToLocale}/{{lng}}/locales.json`,
    },
  });

  return i18nInstance;
};
