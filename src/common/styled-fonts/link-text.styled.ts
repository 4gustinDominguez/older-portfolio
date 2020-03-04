import styled from '../../styled-components';

export const LinkText = styled.a`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme: { spacing } }) => spacing(2)}px;
  color: ${({ theme: { palette } }) => palette.text};
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:active {
    color: ${({ theme: { palette } }) => palette.primary};
  }

  transition: color ${({ theme: { transition } }) => transition[1]};
`;
