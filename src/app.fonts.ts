import { css } from './styled-components';

import lightFont from './assets/fonts/Raleway-Light.ttf';
import mediumFont from './assets/fonts/Raleway-Medium.ttf';
import blackFont from './assets/fonts/Raleway-Black.ttf';

export const fontFaces = css`
  @font-face {
    font-family: "'Raleway', sans-serif";
    font-style: normal;
    font-weight: 300;
    src: url(${lightFont}) format('truetype');
  }
  @font-face {
    font-family: "'Raleway', sans-serif";
    font-style: normal;
    font-weight: 500;
    src: url(${mediumFont}) format('truetype');
  }
  @font-face {
    font-family: "'Raleway', sans-serif";
    font-style: normal;
    font-weight: 900;
    src: url(${blackFont}) format('truetype');
  }
`;
