import styled, { css } from '../../styled-components';

import { Mode } from '../../app.model';

type CheckboxProps = {
  mode: Mode;
};

export const CheckBoxWrapper = styled.div<CheckboxProps>`
  flex-shrink: 0;
  position: relative;
  width: 3.3rem;
  height: 2.2rem;
  border-radius: 2rem;
  border: 0.1em solid ${({ theme: { palette }, mode }) => palette[mode].font};
  padding: ${({ theme }) => theme.spacing(0.3)}px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckBox = styled.input`
  opacity: 0;
  position: absolute;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export const CheckBoxLabel = styled.label<CheckboxProps>`
  ${({ theme: { palette, spacing }, mode }) => css`
    width: 100%;
    height: 100%;
    background-color: ${palette[mode].font};
    border-radius: 2em;
    cursor: pointer;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 ${spacing(0.6)}px;
    -webkit-tap-highlight-color: transparent;
    &::after {
      content: '';
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
      background-color: ${palette[mode][mode === 'light' ? 'background' : 'font']};
      transform: translateX(${mode === 'light' ? 0 : `${spacing(2.6)}px`});
      box-shadow: ${mode === 'light' ? `0px 0px 3px 1px white` : `inset -5px 0px 0px 2px ${palette[mode].background}`};
      transition: 0.25s;
    }
  `}
`;

/*

      box-shadow: ${mode === 'light' ? `0px 0px 5px 2px white` : `6px 0 0 0 ${theme.palette[mode].background}`};
*/
