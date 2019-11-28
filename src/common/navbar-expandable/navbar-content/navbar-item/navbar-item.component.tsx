import * as React from 'react';
import { IconLink } from '../../../../app.model';
import { NavBarItemStyled } from './navbar-item.styled';

type IconButtonProps = {
  category: IconLink;
};

export const NavBarItem: React.FC<IconButtonProps> = ({ category: { title, Icon, url } }) => (
  <NavBarItemStyled href={url} target="_blank">
    <Icon size={2} color="text" hoveredColor="primary" hovered={true} />
  </NavBarItemStyled>
);
