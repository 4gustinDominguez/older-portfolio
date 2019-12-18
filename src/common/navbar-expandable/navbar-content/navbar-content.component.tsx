import * as React from 'react';
import { IconLink } from '../../../app.model';
import { NavContentStyled } from './navbar-content.styled';
import { NavBarItem } from './navbar-item';

type NavBarContentProps = {
  expand: boolean;
  categories: IconLink[];
};

export const NavBarContent: React.FC<NavBarContentProps> = ({ expand, categories }) => {
  return (
    <NavContentStyled expand={expand}>
      {categories.map((category, index) => (
        <NavBarItem key={`category-${index}`} category={category} />
      ))}
    </NavContentStyled>
  );
};
