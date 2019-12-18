import * as React from 'react';
import { tkeys } from '../../core/translation';
import { useTranslatedKeys, Language } from '../../providers';

import { createFooter } from './footer.business';
import { DropdownMenu } from '../../common';

type FooterProps = {
  language: Language;
  toggleLanguage: (code: string) => void;
};

export const Footer: React.FC<FooterProps> = ({ language, toggleLanguage }) => {
  const [tdkFooter, tdkLanguages] = useTranslatedKeys(tkeys.footer.title, tkeys.supportedLanguages);
  const footer = createFooter(tdkFooter);

  return (
    <>
      <DropdownMenu
        selectedItem={tdkLanguages[language]}
        items={Object.values(tdkLanguages)}
        toggleItem={toggleLanguage}
      />
    </>
  );
};
