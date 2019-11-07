import * as React from 'react';
import { IconLink, Mode } from '../../../../app.model';
import { NavItemStyled } from './navigation-item.styled';

type IconButtonProps = {
  mode: Mode;
  category: IconLink;
};

export const NavigationItem: React.FC<IconButtonProps> = ({ mode, category: { title, Icon, url } }) => (
  <NavItemStyled href={url} target="_blank">
    <Icon mode={mode} size={2} color="text" hoveredColor="highlighted" hovered={true} />
  </NavItemStyled>
);
