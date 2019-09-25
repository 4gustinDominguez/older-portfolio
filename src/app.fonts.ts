import { css } from './styled-components';

import font from './assets/fonts/montserrat-regular.ttf';
import italicFont from './assets/fonts/montserrat-regularItalic.ttf';

export const fontFaces = css`
  @font-face {
    font-family: "'Montserrat', sans-serif";
    src: url(${font}) format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: "'Montserrat', sans-serif";
    src: url(${italicFont}) format('truetype');
    font-style: italic;
  }
`;
