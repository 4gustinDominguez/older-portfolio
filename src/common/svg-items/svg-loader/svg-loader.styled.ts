import styled, { css } from '../../../styled-components';
import SVG from 'react-inlinesvg';
import { Mode } from '../../../app.model';

type SVGStyledProps = {
  mode: Mode;
};

export const SVGStyled = styled(SVG)<SVGStyledProps>`
  ${({ theme: { palette }, mode }) => css`
    fill: ${palette[mode].font};
    transition: fill 0.5s ease-out, background 0.5s ease-out;
  `}
`;
