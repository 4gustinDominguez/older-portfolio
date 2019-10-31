import * as React from 'react';
import { SVGStyled } from './svg-loader.styled';
import { Mode } from '../../../app.model';

export type SVGLoaderProps = {
  title: string;
  image: string;
  mode?: Mode;
  className?: string;
};

export const SVGLoader: React.FC<SVGLoaderProps> = ({ title, image, className, mode }) => (
  <SVGStyled src={image} title={title} className={className} width="30px" height="30px" mode={mode} />
);
