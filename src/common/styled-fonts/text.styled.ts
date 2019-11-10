import styled from '../../styled-components';

export const Text = styled.p`
  font-size: ${({ theme: { spacing } }) => spacing(2)}px;
  color: ${({ theme: { palette } }) => palette.text}
  font-weight: 300;
`;

export const HighlightedText = styled.b`
  font-size: ${({ theme: { spacing } }) => spacing(2)}px;
  color: ${({ theme: { palette } }) => palette.primary}
  font-weight: 400;
`;
