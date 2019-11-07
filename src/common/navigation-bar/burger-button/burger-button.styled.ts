import styled from '../../../styled-components';

import { Mode } from '../../../app.model';

type BurgerButtonProps = {
  mode: Mode;
  expand: boolean;
};

export const BurgerContainer = styled.div<BurgerButtonProps>`
  position: fixed;
  top: 0;
  right: 0;
  padding: ${({ theme: { spacing } }) => spacing(2)}px;
  width: ${({ theme: { spacing } }) => spacing(4)}px;
  z-index: 5;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &::before,
  &::after {
    content: '';
    display: block;
    height: ${({ theme: { spacing } }) => spacing(0.4)}px;
    margin: ${({ theme: { spacing } }) => spacing(0.6)}px 0;
    border-radius: ${({ theme: { spacing } }) => spacing(2)}px;
    background-color: ${({ theme: { palette }, mode }) => palette[mode].primary};
    transition: all 0.2s ease-in-out;
  }

  &::before {
    transform: ${({ theme: { spacing }, expand }) => expand && `translateY(${spacing(1)}px) rotate(135deg)`};
  }

  &::after {
    transform: ${({ theme: { spacing }, expand }) => expand && `translateY(${spacing(-1)}px) rotate(-135deg)`};
  }

  &:hover {
    background-color: ${({ theme: { palette }, mode }) => palette[mode].hoveredBackground};
  }
`;

export const BurgerLine = styled.div<BurgerButtonProps>`
  display: block;
  height: ${({ theme: { spacing } }) => spacing(0.4)}px;
  margin: ${({ theme: { spacing } }) => spacing(0.6)}px 0;
  border-radius: ${({ theme: { spacing } }) => spacing(2)}px;
  background-color: ${({ theme: { palette }, mode }) => palette[mode].primary};
  transform: ${({ expand }) => expand && `scale(0)`};
  transition: all 0.2s ease-in-out;
`;
