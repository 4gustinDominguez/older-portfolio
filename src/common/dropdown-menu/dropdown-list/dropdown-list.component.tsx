import * as React from 'react';
import { DropdownListContainer, DropdownItem } from './dropdown-list.styled';

type DropdownListProps = {
  items: any;
  handleClick: (item: any) => void;
};

export const DropdownList: React.FC<DropdownListProps> = ({ items, handleClick }) => {
  const onClick = (item: any) => (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => handleClick(item);

  return (
    <DropdownListContainer>
      {items.map((item, index) => (
        <DropdownItem key={`item-${index}`} onClick={onClick(item)}>
          {item.description}
        </DropdownItem>
      ))}
    </DropdownListContainer>
  );
};
