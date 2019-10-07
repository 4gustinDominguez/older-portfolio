import { Theme } from './app.theme';
import { Mode } from './app.model';

export const updateHeadTags = (mode: Mode, theme: Theme) => {
  document.getElementById('themeTag').setAttribute('content', theme.palette[mode].background);
};
