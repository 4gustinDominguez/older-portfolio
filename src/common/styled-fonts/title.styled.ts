import styled from '../../styled-components';

export const Title = styled.h1`
  font-size: ${({ theme: { spacing } }) => spacing(8)}px;
  color: ${({ theme: { palette } }) => palette.primary};
  font-weight: 700;
  line-height: ${({ theme: { spacing } }) => spacing(7)}px;
  margin: 0;
  padding: 0;
`;
