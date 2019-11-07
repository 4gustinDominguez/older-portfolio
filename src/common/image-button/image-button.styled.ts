import styled from '../../styled-components';
import { Mode } from '../../app.model';

type ImageButtonContainerProps = {
  mode: Mode;
};

type SvgStyledProps = {
  mode: Mode;
  hovered: boolean;
};

export const ImageButtonContainer = styled.a<ImageButtonContainerProps>`
  background-color: ${({ theme: { palette }, mode }) => palette[mode].background};
  color: ${({ theme: { palette }, mode }) => palette[mode].primary};
  border: 1px solid ${({ theme: { palette }, mode }) => palette[mode].primary};
  transition: background-color 0.3s ease, color 0.3s ease;
  font-weight: 500;
  text-decoration: none;

  height: ${({ theme: { spacing } }) => spacing(5)};
  width: ${({ theme: { spacing } }) => spacing(19)};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ theme: { palette }, mode }) => palette[mode].primary};
    color: ${({ theme: { palette }, mode }) => palette[mode].background};
  }

  transition: all 0.2s ease-out;
`;

export const SvgStyled = styled.svg<SvgStyledProps>`
  color: ${({ theme: { palette }, mode, hovered }) => palette[mode][hovered ? 'background' : 'primary']};
  height: 18px;
  width: 18px;
`;
