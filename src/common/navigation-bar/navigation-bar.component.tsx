import * as React from 'react';

import { NavigationBarContainer } from './navigation-bar.styled';
import { BurgerButton } from './burger-button';
import { NavigationContent } from './navigation-content';
import { IconLink } from '../../app.model';

type NavigationBarProps = {
  categories: IconLink[];
};

export const NavigationBar: React.FC<NavigationBarProps> = ({ categories }) => {
  const [expand, setExpand] = React.useState<boolean>(false);

  return (
    <NavigationBarContainer>
      <BurgerButton expand={expand} setExpand={setExpand} />
      <NavigationContent expand={expand} categories={categories} />
    </NavigationBarContainer>
  );
};
