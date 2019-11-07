import * as React from 'react';

import { Mode } from '../../app.model';

import { NavigationBar, ModeSwitch } from '../../common';

type HeaderProps = {
  handleMode: () => void;
  mode: Mode;
};

export const Header: React.FC<HeaderProps> = ({ handleMode, mode }) => (
  <>
    <ModeSwitch mode={mode} toggleMode={handleMode} />
    <NavigationBar mode={mode} />
  </>
);
