import * as React from 'react';
import { IconLink, Mode } from '../../../app.model';
import { NavContentStyled } from './navigation-content.styled';
import { NavigationItem } from './navigation-item';

type NavigationContentProps = {
  mode: Mode;
  expand: boolean;
  categories: IconLink[];
};

export const NavigationContent: React.FC<NavigationContentProps> = ({ mode, expand, categories }) => {
  return (
    <NavContentStyled mode={mode} expand={expand}>
      {categories.map((category, index) => (
        <NavigationItem key={`category-${index}`} category={category} mode={mode} />
      ))}
    </NavContentStyled>
  );
};
