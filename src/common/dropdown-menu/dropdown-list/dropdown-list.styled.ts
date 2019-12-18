import styled, { css } from '../../../styled-components';

type DropdownProps = {
  expanded: boolean;
};

export const DropdownListContainer = styled.ul<DropdownProps>`
  ${({ theme: { transition }, expanded }) => css`
    user-select: none;
    padding: 0;
    margin: 0;
    visibility: ${expanded ? 'visible' : 'hidden'};
    opacity: ${expanded ? '1' : '0'};
    transition: opacity ${transition[1]};
  `}
`;

export const DropdownItem = styled.li`
  list-style-type: none;
  user-select: none;
  margin: 0 auto;
  padding: ${({ theme: { spacing } }) => `${spacing(0.5)}px ${spacing(1)}px`};
  cursor: pointer;

  &:hover {
    color: ${({ theme: { palette } }) => palette['primary']};
  }
`;
