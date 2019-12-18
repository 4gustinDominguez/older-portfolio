import * as React from 'react';

import { SelectedItemContainer, Arrow } from './selected-item.styled';
import { Text } from '../../styled-fonts';
import { DropdownItem } from '../dropdown-menu.model';

type SelectedItemProps = {
  selectedItem: DropdownItem;
  expanded: boolean;
  toggleExpanded: () => void;
};

export const SelectedItem: React.FC<SelectedItemProps> = ({ selectedItem: { code }, expanded, toggleExpanded }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => toggleExpanded();

  return (
    <SelectedItemContainer onClick={handleClick}>
      <Text format={'normal'} lineSpacing={false}>
        {code.toUpperCase()}
      </Text>
      <Arrow expanded={expanded} />
    </SelectedItemContainer>
  );
};
