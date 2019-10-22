import * as React from 'react';
import SVG from 'react-inlinesvg';

type SVGLoaderProps = {
  image: string;
  className?: string;
};

export const SVGLoader: React.FC<SVGLoaderProps> = ({ image, className }) => (
  <SVG src={image} className={className} width="30px" height="30px" />
);
