import * as React from 'react';
import { IconLink } from '../../../../app.model';
import { NavItemStyled } from './navigation-item.styled';

type IconButtonProps = {
  category: IconLink;
};

export const NavigationItem: React.FC<IconButtonProps> = ({ category: { title, Icon, url } }) => (
  <NavItemStyled href={url} target="_blank">
    <Icon size={2} color="text" hoveredColor="primary" hovered={true} />
  </NavItemStyled>
);
