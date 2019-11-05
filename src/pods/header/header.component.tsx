import * as React from 'react';

import { Mode } from '../../app.model';

import * as VM from '../../models';

import { NavigationBar, ModeSwitch } from '../../common';
import { createCategories } from './header.business';

type HeaderProps = {
  handleMode: () => void;
  mode: Mode;
};

export const Header: React.FC<HeaderProps> = ({ handleMode, mode }) => {
  const categories = createCategories();

  return (
    <>
      <ModeSwitch mode={mode} toggleMode={handleMode} />
      <NavigationBar categories={categories} mode={mode} />
    </>
  );
};
