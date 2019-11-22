import * as React from 'react';

import { DropdownMenuContainer } from './dropdown-menu.styled';
import { SelectedItem } from './selected-item';
import { DropdownList } from './dropdown-list';

/*
{
  code: "EN",
  description: "EN - English"
}
*/

type DropdownMenuProps = {
  items: any;
};

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(items[0]);

  const handleMouseOver = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => setExpanded(true);
  const handleMouseOut = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => setExpanded(false);

  const handleClick = (value: any) => setSelectedItem(value);

  return (
    <DropdownMenuContainer onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <SelectedItem selectedItem={selectedItem} expanded={expanded} />
      <DropdownList items={items} handleClick={handleClick} />
    </DropdownMenuContainer>
  );
};
