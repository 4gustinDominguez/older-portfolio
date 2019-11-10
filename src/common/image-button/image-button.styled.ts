import styled from '../../styled-components';

export const ImageButtonContainer = styled.a`
  background-color: ${({ theme: { palette } }) => palette.background};
  color: ${({ theme: { palette } }) => palette.primary};
  border: 1px solid ${({ theme: { palette } }) => palette.primary};
  transition: background-color 0.3s ease, color 0.3s ease;
  font-weight: 500;
  text-decoration: none;

  height: ${({ theme: { spacing } }) => spacing(5)};
  width: ${({ theme: { spacing } }) => spacing(19)};

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:hover {
    background-color: ${({ theme: { palette } }) => palette.primary};
    color: ${({ theme: { palette } }) => palette.background};
  }
`;
