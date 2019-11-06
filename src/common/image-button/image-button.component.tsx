import * as React from 'react';

import { Mode, IconLink } from '../../app.model';
import { ImageButtonContainer, ImageButtonIcon } from './image-button.styled';

type ImageButtonProps = {
  mode: Mode;
  file: IconLink;
};

export const ImageButton: React.FC<ImageButtonProps> = ({ mode, file: { title, icon, url } }) => {
  const [hovered, setHovered] = React.useState<boolean>(false);

  const handleHover = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => setHovered(!hovered);

  return (
    <>
      <ImageButtonContainer href={url} mode={mode} onMouseOver={handleHover}>
        <ImageButtonIcon src={icon} mode={mode} hovered={hovered} height="24px" width="24px" />
        {title}
      </ImageButtonContainer>
    </>
  );
};
