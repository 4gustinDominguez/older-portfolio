import styled from '../../styled-components';
import { Mode } from '../../app.model';

type TextProps = {
  mode: Mode;
};

export const Text = styled.p<TextProps>`
  font-size: ${({ theme: { spacing } }) => spacing(2.2)}px;
  color: ${({ theme: { palette }, mode }) => palette[mode].text}
  font-weight: 300;
`;

export const HighlightedText = styled.b<TextProps>`
  font-size: ${({ theme: { spacing } }) => spacing(2.2)}px;
  color: ${({ theme: { palette }, mode }) => palette[mode].primary}
  font-weight: 400;
`;
