export type Mode = 'dark' | 'light';

export type IconProps = {
  imageSrc: string;
  mode?: Mode;
  height?: string;
  width?: string;
};

export type IconLink = {
  title: string;
  icon: string;
  url: string;
};
