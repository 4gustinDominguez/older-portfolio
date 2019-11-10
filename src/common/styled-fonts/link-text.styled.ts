import styled from '../../styled-components';

export const LinkText = styled.a`
  font-size: ${({ theme: { spacing } }) => spacing(2)}px;
  color: ${({ theme: { palette } }) => palette.primary}
  font-weight: bold;

  &:hover {
    color: ${({ theme: { palette } }) => palette.hoveredLink};
  }
`;
