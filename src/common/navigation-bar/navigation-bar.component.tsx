import * as React from 'react';

import { Mode, IconLink } from '../../app.model';

import { NavigationBarContainer } from './navigation-bar.styled';
import { BurgerButton } from './burger-button';
import { NavigationContent } from './navigation-content';

type NavigationBarProps = {
  categories: IconLink[];
  mode: Mode;
};

export const NavigationBar: React.FC<NavigationBarProps> = ({ mode, categories }) => {
  const [expand, setExpand] = React.useState<boolean>(false);

  return (
    <NavigationBarContainer>
      <BurgerButton mode={mode} expand={expand} setExpand={setExpand} />
      <NavigationContent mode={mode} expand={expand} categories={categories} />
    </NavigationBarContainer>
  );
};
