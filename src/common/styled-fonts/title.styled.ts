import styled from '../../styled-components';

export const Title = styled.h1`
  font-size: ${({ theme: { spacing } }) => spacing(5)}px;
  color: ${({ theme: { palette } }) => palette.primary};
  font-weight: 900;
  margin: 0;
  padding: 0;
`;
