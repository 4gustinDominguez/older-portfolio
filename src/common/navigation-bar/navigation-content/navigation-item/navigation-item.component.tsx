import * as React from 'react';
import { IconProps } from '../../../../app.model';
import { Icon } from '../../../icon';
import { NavItemStyled } from './navigation-item.styled';

type IconButtonProps = IconProps & {
  url: string;
  target?: string;
};

export const NavigationItem: React.FC<IconButtonProps> = ({ mode, url, imageSrc, target }) => (
  <NavItemStyled href={url} target={target}>
    <Icon imageSrc={imageSrc} mode={mode} height="18px" width="18px" />
  </NavItemStyled>
);
