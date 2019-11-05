import styled from '../../styled-components';
import { Mode } from '../../app.model';

type SubtitleProps = {
  mode: Mode;
};

export const Subtitle = styled.h2<SubtitleProps>`
  font-size: ${({ theme: { spacing } }) => spacing(3)}px;
  font-weight: 500;
  color: ${({ theme: { palette }, mode }) => palette[mode].secondary}
  margin: 0;
  padding: 0;
`;
