import * as React from 'react';

import { Mode, IconLink } from '../../app.model';
import { ImageButtonContainer, GetInTouchStyled } from './image-button.styled';

type ImageButtonProps = {
  mode: Mode;
  file: IconLink;
};

export const ImageButton: React.FC<ImageButtonProps> = ({ mode, file: { title, icon, url } }) => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseOver = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => setHovered(true);
  const handleMouseOut = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => setHovered(false);

  return (
    <>
      <ImageButtonContainer href={url} mode={mode} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <GetInTouchStyled mode={mode} hovered={hovered} />
        {title}
      </ImageButtonContainer>
    </>
  );
};
