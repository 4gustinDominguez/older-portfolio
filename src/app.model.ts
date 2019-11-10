import { Theme } from './app.theme';

export type Mode = 'dark' | 'light';
export type Color = keyof Theme['palette'];

export type SvgIconProps = {
  color: Color;
  hovered?: boolean;
  hoveredColor?: Color;
  size: number;
  title?: string;
};

export type IconLink = {
  title: string;
  url: string;
  Icon: React.FunctionComponent<SvgIconProps>;
};

export type Introduction = {
  title: string;
  subtitle: string;
  text: string;
};
