import styled from '../../styled-components';
import { Mode } from '../../app.model';

type TitleProps = {
  mode: Mode;
};

export const Title = styled.h1<TitleProps>`
  font-size: ${({ theme: { spacing } }) => spacing(5)}px;
  color: ${({ theme: { palette }, mode }) => palette[mode].primary}
  font-weight: 900;
  margin: 0;
  padding: 0;
`;
