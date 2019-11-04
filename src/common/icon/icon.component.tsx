import * as React from 'react';
import { IconStyled } from './icon.styled';
import { IconProps } from '../../app.model';

export const Icon: React.FC<IconProps> = ({ imageSrc, mode, height = '30px', width = '30px' }) => (
  <IconStyled src={imageSrc} mode={mode} height={height} width={width} />
);
