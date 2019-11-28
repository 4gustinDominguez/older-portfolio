import * as React from 'react';
import { IconLink } from '../../../app.model';
import { NavBarItemContainer } from './navbar-item.styled';
import { LinkText } from '../../styled-fonts';

type NavBarItemProps = {
  category: IconLink;
  selectElement: (valueRef: any) => void;
};

export const NavBarItem: React.FC<NavBarItemProps> = ({ category: { title, url }, selectElement }) => {
  const navBarItemRef = React.useRef(null);

  const selectRef = (valueRef: any) => (
    event: React.FocusEvent<HTMLLIElement> | React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => selectElement(valueRef);

  return (
    <NavBarItemContainer
      ref={navBarItemRef}
      onMouseOver={selectRef(navBarItemRef.current)}
      onFocus={selectRef(navBarItemRef.current)}
    >
      <LinkText href={url}>{title.toUpperCase()}</LinkText>
    </NavBarItemContainer>
  );
};
