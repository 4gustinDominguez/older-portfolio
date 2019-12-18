import styled, { css } from '../../../styled-components';

export const SelectedItemContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

type ArrowProps = {
  expanded: boolean;
};

export const Arrow = styled.span<ArrowProps>`
  ${({ theme: { palette, spacing, transition }, expanded }) => css`
    position: relative;

    width: ${spacing(3)}px;
    height: ${spacing(3)}px;

    transform: ${expanded && `translate(0, ${spacing(0.5)}px)`};
    transition: transform ${transition[0]};

    &:before,
    &:after {
      content: '';

      position: absolute;
      top: ${spacing(0.6)}px;
      left: ${spacing(1.5)}px;

      width: ${spacing(1.2)}px;
      height: ${spacing(1)}px;

      border-bottom: ${spacing(0.25)}px solid ${palette.text};

      transition: transform ${transition[0]};
    }

    &:before {
      transform: rotate(${expanded ? '135deg' : '45deg'});
    }

    &:after {
      transform: rotate(${expanded ? '-135deg' : '-45deg'});
    }
  `}
`;
