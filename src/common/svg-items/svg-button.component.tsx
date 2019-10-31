import * as React from 'react';
import { SVGLoader, SVGLoaderProps } from './svg-loader';
import { SVGButtonContainer } from './svg-button.styled';

type SVGButtonProps = SVGLoaderProps & {
  hrefUrl: string;
  target?: string;
};

export const SVGButton: React.FC<SVGButtonProps> = ({ hrefUrl, image, target, mode, className }) => (
  <SVGButtonContainer href={hrefUrl} target={target}>
    <SVGLoader className={className} image={image} mode={mode} />
  </SVGButtonContainer>
);
