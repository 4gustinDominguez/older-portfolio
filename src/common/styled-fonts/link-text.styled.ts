import styled from '../../styled-components';
import { Mode } from '../../app.model';

type LinkTextProps = {
  mode: Mode;
};

export const LinkText = styled.a<LinkTextProps>`
  font-size: ${({ theme: { spacing } }) => spacing(2)}px;
  color: ${({ theme: { palette }, mode }) => palette[mode].primary}
  font-weight: bold;

  &:hover {
    color: ${({ theme: { palette }, mode }) => palette[mode].hoveredLink};
  }
`;
