import styled from '../../styled-components';

export const Subtitle = styled.h2`
  font-size: ${({ theme: { spacing } }) => spacing(3)}px;
  font-weight: 500;
  color: ${({ theme: { palette } }) => palette.secondary}
  margin: 0;
  padding: 0;
`;
