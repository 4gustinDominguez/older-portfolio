import * as React from 'react';

import { DropdownItem } from './dropdown-menu.model';

import { DropdownMenuContainer } from './dropdown-menu.styled';
import { SelectedItem } from './selected-item';
import { DropdownList } from './dropdown-list';
import { useExpandContainer } from './dropdown-menu.hook';

type DropdownMenuProps = {
  selectedItem: DropdownItem;
  items: DropdownItem[];
  toggleItem: (item: string) => void;
};

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ selectedItem, items, toggleItem }) => {
  const node = React.useRef();
  const [expanded, setExpanded] = useExpandContainer(node);

  const handleClick = () => setExpanded(!expanded);
  const selectItem = (item: string) => {
    setExpanded(!expanded);
    toggleItem(item);
  };

  return (
    <DropdownMenuContainer ref={node}>
      <DropdownList items={items} expanded={expanded} handleClick={selectItem} />
      <SelectedItem selectedItem={selectedItem} expanded={expanded} toggleExpanded={handleClick} />
    </DropdownMenuContainer>
  );
};
