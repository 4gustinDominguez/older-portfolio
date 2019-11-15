import * as React from 'react';
import { IconLink } from '../../../app.model';
import { NavigationItemContainer } from './navigation-item.styled';
import { LinkText } from '../../styled-fonts';

type NavigationItemProps = {
  category: IconLink;
};

export const NavigationItem: React.FC<NavigationItemProps> = ({ category: { title, url } }) => (
  <NavigationItemContainer>
    <LinkText href={url}>{title.toUpperCase()}</LinkText>
  </NavigationItemContainer>
);
