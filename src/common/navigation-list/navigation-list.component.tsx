import * as React from 'react';
import { NavigationListContainer } from './navigation-list.styled';
import { IconLink } from '../../app.model';
import { NavigationItem } from './navigation-item/navigation-item.component';

type NavigationListProps = {
  categories: IconLink[];
};

export const NavigationList: React.FC<NavigationListProps> = ({ categories }) => {
  return (
    <NavigationListContainer>
      {categories && categories.map((category, index) => <NavigationItem category={category} key={index} />)}
    </NavigationListContainer>
  );
};
