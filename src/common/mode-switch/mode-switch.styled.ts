import styled from '../../styled-components';

import { Mode } from '../../app.model';

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.spacing(5.5)};
  height: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => `${theme.spacing(2)}px`};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

type CheckboxProps = {
  mode: Mode;
};

export const CheckBox = styled.input<CheckboxProps>`
  opacity: 0;
  & + ${CheckBoxLabel} {
    background: ${({ mode }) => (mode === 'light' ? '#a5d2ff' : '#2c3e52')};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: ${({ theme }) => theme.spacing(2.3)};
      height: ${({ theme }) => theme.spacing(2.3)};
      margin-left: ${({ theme, mode }) => (mode === 'light' ? theme.spacing(0.5) : theme.spacing(1.5))};
      background: ${({ mode }) => (mode === 'light' ? '#ffcf96' : '#2c3e52')};
      box-shadow: ${({ mode }) => (mode === 'light' ? `none` : `8px 0 0 0 #fee5b5`)};
      transition: all 0.2s ease;
  }
`;
