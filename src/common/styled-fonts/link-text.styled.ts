import styled from '../../styled-components';

export const LinkText = styled.a`
  font-size: ${({ theme: { spacing } }) => spacing(2)}px;
  color: ${({ theme: { palette } }) => palette.text}
  text-decoration: none;

  &:hover, &:active {
    color: ${({ theme: { palette } }) => palette.primary};
  }

  transition: color ${({ theme: { transition } }) => transition[1]};
`;
