import * as React from 'react';

import { Mode } from '../../app.model';

import { NavBarList, NavBarExpandable, ModeSwitch } from '../../common';
import { tkeys } from '../../core/translation';
import { useTranslatedKeys } from '../../providers';

import { createCategories } from './header.business';

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
      <NavBarList categories={categories} />
      <NavBarExpandable categories={categories} />
    </>
  );
};
