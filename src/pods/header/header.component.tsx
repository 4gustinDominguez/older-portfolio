import * as React from 'react';

import { Mode } from '../../app.model';

import { NavigationList, NavigationBar, ModeSwitch } from '../../common';
import { tkeys } from '../../core/translation';
import { useTranslatedKeys } from '../../providers';

import { createCategories } from './header.business';

type HeaderProps = {
  toggleMode: () => void;
  mode: Mode;
};

export const Header: React.FC<HeaderProps> = ({ toggleMode, mode }) => {
  const [tdkLanguages, tdkCategories, tdkSocialNetworks] = useTranslatedKeys(
    tkeys.header.supportedLanguages,
    tkeys.header.categories,
    tkeys.header.socialNetworks
  );

  //const languages = createLanguages(tdkLanguages);
  const categories = createCategories(tdkCategories);

  return (
    <>
      <ModeSwitch mode={mode} toggleMode={toggleMode} />
      <NavigationList categories={categories} />
      <NavigationBar categories={categories} />
    </>
  );
};
