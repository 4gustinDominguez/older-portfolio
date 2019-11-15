import * as React from 'react';

import { Mode } from '../../app.model';

import { NavigationList, NavigationBar, ModeSwitch } from '../../common';
import { createCategories } from './header.business';

type HeaderProps = {
  toggleMode: () => void;
  mode: Mode;
};

export const Header: React.FC<HeaderProps> = ({ toggleMode, mode }) => {
  const categories = createCategories();

  return (
    <>
      <ModeSwitch mode={mode} toggleMode={toggleMode} />
      <NavigationList categories={categories} />
      <NavigationBar categories={categories} />
    </>
  );
};
