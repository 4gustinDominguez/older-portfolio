import styled from '../../../styled-components';

export const NavBarItemContainer = styled.li`
  height: 100%;

  margin-left: ${({ theme: { spacing } }) => spacing(4)}px;

  display: flex;
  align-items: center;
`;
