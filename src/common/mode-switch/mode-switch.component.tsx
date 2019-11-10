import * as React from 'react';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from './mode-switch.styled';
import { Mode } from '../../app.model';

type ModeSwitchProps = {
  mode: Mode;
  toggleMode: () => void;
};

export const ModeSwitch: React.FC<ModeSwitchProps> = ({ mode, toggleMode }) => {
  const handleMode = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => toggleMode();

  return (
    <>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" onClick={handleMode} />
        <CheckBoxLabel htmlFor="checkbox" mode={mode}></CheckBoxLabel>
      </CheckBoxWrapper>
    </>
  );
};
