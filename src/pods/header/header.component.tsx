import * as React from 'react';

import { Mode } from '../../app.model';

import { NavigationBar, ModeSwitch } from '../../common';

type HeaderProps = {
  toggleMode: () => void;
  mode: Mode;
};

export const Header: React.FC<HeaderProps> = ({ toggleMode, mode }) => (
  <>
    <ModeSwitch mode={mode} toggleMode={toggleMode} />
    <NavigationBar />
  </>
);
