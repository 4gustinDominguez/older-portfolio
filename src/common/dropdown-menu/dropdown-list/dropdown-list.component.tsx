import * as React from 'react';
import { DropdownListContainer, DropdownItem } from './dropdown-list.styled';
import { DropdownItem as DropdownItemModel } from '../dropdown-menu.model';

type DropdownListProps = {
  items: DropdownItemModel[];
  expanded: boolean;
  handleClick: (item: string) => void;
};

export const DropdownList: React.FC<DropdownListProps> = ({ items, expanded, handleClick }) => {
  const onClick = (item: string) => (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => handleClick(item);

  return (
    <DropdownListContainer expanded={expanded}>
      {items.map(({ code, description }, index) => (
        <DropdownItem key={`item-${index}`} onClick={onClick(code)}>
          {description}
        </DropdownItem>
      ))}
    </DropdownListContainer>
  );
};
