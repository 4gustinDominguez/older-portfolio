import * as React from 'react';

import { Mode } from '../../app.model';

import { NavigationList, NavigationBar, ModeSwitch } from '../../common';
import { createCategories } from './header.business';
import { useTranslatedKeys } from '../../providers';
import { tkeys } from '../../core/translation';

type HeaderProps = {
  toggleMode: () => void;
  mode: Mode;
};

export const Header: React.FC<HeaderProps> = ({ toggleMode, mode }) => {
  const [tdkCategories, tdkSocialNetworks] = useTranslatedKeys(tkeys.header.categories, tkeys.header.socialNetworks);
  const categories = createCategories(tdkCategories);

  return (
    <>
      <ModeSwitch mode={mode} toggleMode={toggleMode} />
      <NavigationList categories={categories} />
      <NavigationBar categories={categories} />
    </>
  );
};
