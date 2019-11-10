import * as React from 'react';
import { IconLink } from '../../../app.model';
import { NavContentStyled } from './navigation-content.styled';
import { NavigationItem } from './navigation-item';

type NavigationContentProps = {
  expand: boolean;
  categories: IconLink[];
};

export const NavigationContent: React.FC<NavigationContentProps> = ({ expand, categories }) => {
  return (
    <NavContentStyled expand={expand}>
      {categories.map((category, index) => (
        <NavigationItem key={`category-${index}`} category={category} />
      ))}
    </NavContentStyled>
  );
};
