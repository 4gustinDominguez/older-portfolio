import * as React from 'react';
import { TFunction, i18n } from 'i18next';

import { useTranslation as useTranslationI18n } from 'react-i18next';
import { TranslationKeysContext } from './translation.context';

import mapValues from 'lodash.mapvalues';

/**
 *  Get translation keys object from context
 */
export const useTranslationKeys = <TKeys = {}>(): TKeys => {
  const context = React.useContext<TKeys>(TranslationKeysContext);

  if (context === undefined) {
    throw new Error('useTranslationKeys must be used within a TranslationKeysProvider');
  }

  return context;
};

/**
 * Get translation function from i18next, i18next instance and translation keys object from context
 */
export const useTranslation = <TKeys = {}>(): {
  t: TFunction;
  tkeys: TKeys;
  i18n: i18n;
  ready: boolean;
} => {
  const { t, i18n, ready } = useTranslationI18n();
  const tkeys = useTranslationKeys<TKeys>();

  return { t, tkeys, i18n, ready };
};

/**
 * Get single key or keys object translation
 * @param keys
 */
export const useTranslatedKeys = <T, K extends Array<T>>(...keys: K): K => {
  const { t, i18n } = useTranslationI18n();

  const translateKey = React.useCallback(
    key => {
      switch (typeof key) {
        case 'string':
          return t(key);
        case 'object':
          return key && mapValues(key, v => translateKey(v));
        default:
          return undefined;
      }
    },
    [t, i18n.language]
  );

  return React.useMemo(() => keys.map(translateKey) as K, [translateKey, keys]);
};
