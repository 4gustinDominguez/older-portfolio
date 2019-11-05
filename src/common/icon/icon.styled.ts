import styled, { css } from '../../styled-components';
import SVG from 'react-inlinesvg';
import { Mode } from '../../app.model';

type IconStyledProps = {
  mode: Mode;
};

export const IconStyled = styled(SVG)<IconStyledProps>`
  fill: ${({ theme: { palette }, mode }) => palette[mode].secondary}

  &:hover {
    fill: ${({ theme: { palette }, mode }) => palette[mode].highlighted} ;
  }

  transition: all 0.2s ease-out;
`;
