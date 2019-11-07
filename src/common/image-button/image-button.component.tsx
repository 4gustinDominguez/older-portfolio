import * as React from 'react';

import { Mode, IconLink } from '../../app.model';

import { ImageButtonContainer } from './image-button.styled';

type ImageButtonProps = {
  iconSize: number;
  mode: Mode;
  iconLink: IconLink;
};

export const ImageButton: React.FC<ImageButtonProps> = ({ iconSize, mode, iconLink: { title, url, Icon } }) => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseOver = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => setHovered(true);
  const handleMouseOut = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => setHovered(false);

  return (
    <>
      <ImageButtonContainer href={url} mode={mode} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Icon size={iconSize} mode={mode} title={title} color={hovered ? 'background' : 'primary'} />
        {title}
      </ImageButtonContainer>
    </>
  );
};
