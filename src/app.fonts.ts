import { css } from './styled-components';

import lightFont from './assets/fonts/Inter-Light.woff2';
import mediumFont from './assets/fonts/Inter-Medium.woff2';
import blackFont from './assets/fonts/Inter-Black.woff2';

import lightIEFont from './assets/fonts/Inter-LightIE.ttf';
import mediumIEFont from './assets/fonts/Inter-MediumIE.ttf';
import blackIEFont from './assets/fonts/Inter-BlackIE.ttf';

export const fontFaces = css`
  @font-face {
    font-family: "'Inter', sans-serif";
    font-weight: 200;
    src: url(${lightFont}) format('woff2'), url(${lightIEFont}) format('truetype');
  }
  @font-face {
    font-family: "'Inter', sans-serif";
    font-weight: 500;
    src: url(${mediumFont}) format('woff2'), url(${mediumIEFont}) format('truetype');
  }
  @font-face {
    font-family: "'Inter', sans-serif";
    font-weight: 700;
    src: url(${blackFont}) format('woff2'), url(${blackIEFont}) format('truetype');
  }
`;
