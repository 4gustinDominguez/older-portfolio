import * as React from 'react';

import { Mode } from '../../app.model';

import { NavigationBarContainer } from './navigation-bar.styled';
import { BurgerButton } from './burger-button';
import { NavigationContent } from './navigation-content';
import { createCategories } from './navigation-bar.business';

type NavigationBarProps = {
  mode: Mode;
};

export const NavigationBar: React.FC<NavigationBarProps> = ({ mode }) => {
  const [expand, setExpand] = React.useState<boolean>(false);
  const categories = createCategories();

  return (
    <NavigationBarContainer>
      <BurgerButton mode={mode} expand={expand} setExpand={setExpand} />
      <NavigationContent mode={mode} expand={expand} categories={categories} />
    </NavigationBarContainer>
  );
};
