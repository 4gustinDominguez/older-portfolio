import * as React from 'react';

import { IconLink } from '../../app.model';

import { NavBarExpandableContainer } from './navbar-expandable.styled';
import { BurgerButton } from './burger-button';
import { NavBarContent } from './navbar-content';

type NavBarExpandableProps = {
  categories: IconLink[];
};

export const NavBarExpandable: React.FC<NavBarExpandableProps> = ({ categories }) => {
  const [expand, setExpand] = React.useState<boolean>(false);

  return (
    <NavBarExpandableContainer>
      <BurgerButton expand={expand} setExpand={setExpand} />
      <NavBarContent expand={expand} categories={categories} />
    </NavBarExpandableContainer>
  );
};
