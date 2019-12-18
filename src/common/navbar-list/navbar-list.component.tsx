import * as React from 'react';
import { NavBarListContainer, NavBarLine } from './navbar-list.styled';
import { IconLink } from '../../app.model';
import { NavBarItem } from './navbar-item/navbar-item.component';
import { SelectedPosition } from './navbar-list.model';
import { initializeLinePosition } from './navbar-list.business';

type NavBarListProps = {
  categories: IconLink[];
};

export const NavBarList: React.FC<NavBarListProps> = ({ categories }) => {
  const [selected, setSelected] = React.useState(false);
  const [selectedPosition, setSelectedPosition] = React.useState<SelectedPosition>(initializeLinePosition());

  const selectElement = (valueRef: any) => {
    const elementPosition = valueRef && valueRef.getBoundingClientRect();

    setSelectedPosition({
      width: elementPosition ? elementPosition.width : selectedPosition.width,
      left: elementPosition
        ? elementPosition.left + window.scrollX - (window.innerWidth - elementPosition.width)
        : selectedPosition.left,
    });
  };

  const toggleSelected = (value: boolean) => (
    event: React.FocusEvent<HTMLUListElement> | React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => setSelected(value);

  return (
    <>
      <NavBarListContainer
        onFocus={toggleSelected(true)}
        onMouseOver={toggleSelected(true)}
        onBlur={toggleSelected(false)}
        onMouseOut={toggleSelected(false)}
      >
        {categories &&
          categories.map((category, index) => (
            <NavBarItem category={category} key={index} selectElement={selectElement} />
          ))}
      </NavBarListContainer>
      <NavBarLine selected={selected} selectedPosition={selectedPosition} />
    </>
  );
};
