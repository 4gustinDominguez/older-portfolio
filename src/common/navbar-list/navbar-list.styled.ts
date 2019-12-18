import styled from '../../styled-components';
import { SelectedPosition } from './navbar-list.model';

export const NavBarListContainer = styled.ul`
  display: none;

  ${({
    theme: {
      breakpoints: { desktop },
    },
  }) => desktop} {
    height: 100%;
    margin: 0 ${({ theme: { spacing } }) => spacing(8)}px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

type NavBarLineProps = {
  selected: boolean;
  selectedPosition: SelectedPosition;
};

export const NavBarLine = styled.span<NavBarLineProps>`
  position: absolute;
  top: ${({ theme: { spacing } }) => spacing(7)}px;
  right: 0;

  height: ${({ theme: { spacing } }) => spacing(0.25)}px;
  background-color: ${({ theme: { palette } }) => palette.primary};

  opacity: ${({ selected }) => (selected ? 1 : 0)};
  width: ${({ selectedPosition }) => selectedPosition.width}px;
  transform: translateX(${({ selectedPosition, selected }) => (selected ? selectedPosition.left : 0)}px);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
`;
