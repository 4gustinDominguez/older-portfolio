import * as React from 'react';
import { SVGStyled } from './svg-loader.styled';
import { Mode } from '../../../app.model';

export type SVGLoaderProps = {
  image: string;
  mode?: Mode;
  className?: string;
};

export const SVGLoader: React.FC<SVGLoaderProps> = ({ image, className, mode }) => (
  <SVGStyled src={image} className={className} width="30px" height="30px" mode={mode} />
);
