import styled from '../../styled-components';

export const LinkText = styled.a`
  font-size: ${({ theme: { spacing } }) => spacing(2)}px;
  color: ${({ theme: { palette } }) => palette.text}
  text-decoration: none;

  &:hover {
    color: ${({ theme: { palette } }) => palette.primary};
  }
`;
