import * as React from 'react';
import { Mode } from '../../../app.model';
import { BurgerContainer, BurgerLine } from './burger-button.styled';

type BurgerButtonProps = {
  mode: Mode;
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BurgerButton: React.FC<BurgerButtonProps> = ({ mode, expand, setExpand }) => {
  const onExpand = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => setExpand(!expand);

  return (
    <BurgerContainer mode={mode} expand={expand} onClick={onExpand}>
      <BurgerLine mode={mode} expand={expand} />
    </BurgerContainer>
  );
};
