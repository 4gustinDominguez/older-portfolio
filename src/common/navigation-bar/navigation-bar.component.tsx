import * as React from 'react';

import { NavigationBarContainer } from './navigation-bar.styled';
import { BurgerButton } from './burger-button';
import { NavigationContent } from './navigation-content';
import { createCategories } from './navigation-bar.business';

type NavigationBarProps = {};

export const NavigationBar: React.FC<NavigationBarProps> = props => {
  const [expand, setExpand] = React.useState<boolean>(false);
  const categories = createCategories();

  return (
    <NavigationBarContainer>
      <BurgerButton expand={expand} setExpand={setExpand} />
      <NavigationContent expand={expand} categories={categories} />
    </NavigationBarContainer>
  );
};
