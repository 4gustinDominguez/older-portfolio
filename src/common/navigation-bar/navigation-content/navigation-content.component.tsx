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
      {categories.map(({ title, url, icon }, index) => (
        <NavigationItem key={`${title}-${index}`} url={url} imageSrc={icon} mode={mode} />
      ))}
    </NavContentStyled>
  );
};
