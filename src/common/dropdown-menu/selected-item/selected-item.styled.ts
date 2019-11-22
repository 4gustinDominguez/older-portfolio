import styled from '../../../styled-components';

type ArrowProps = {
  expanded: boolean;
};

export const ArrowStyled = styled.span<ArrowProps>`
  width: 13px;
  height: 13px;
  display: inline-block;
  position: relative;
  bottom: -5px;
  left: -10px;
  transition: 0.4s ease;
  margin-top: 2px;
  text-align: left;
  transform: rotate(45deg);
  float: right;
`;
