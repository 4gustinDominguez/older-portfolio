import * as React from 'react';
import { BurgerContainer, BurgerLine } from './burger-button.styled';

type BurgerButtonProps = {
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BurgerButton: React.FC<BurgerButtonProps> = ({ expand, setExpand }) => {
  const onExpand = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => setExpand(!expand);

  return (
    <BurgerContainer expand={expand} onClick={onExpand}>
      <BurgerLine expand={expand} />
    </BurgerContainer>
  );
};
