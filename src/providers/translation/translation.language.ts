export const supportedLanguages = {
  en: 'English',
  es: 'Español',
};

export type Language = keyof typeof supportedLanguages;

export const getLanguageName = (lang: Language): string => supportedLanguages[lang];
