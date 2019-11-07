import styled from '../../../styled-components';
import { SvgIconProps } from '../../../app.model';

export const SvgStyled = styled.svg<SvgIconProps>`
  fill: ${({ theme: { palette }, mode, color }) => palette[mode][color]};
  height: ${({ theme: { spacing }, size }) => spacing(size)}px;
  width: ${({ theme: { spacing }, size }) => spacing(size)}px;

  &:hover {
    fill: ${({ theme: { palette }, mode, color, hoveredColor, hovered }) =>
      hovered ? palette[mode][hoveredColor] : palette[mode][color]};
  }
`;
