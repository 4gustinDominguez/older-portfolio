import styled from '../../../styled-components';

type NavContentStyledProps = {
  expand: boolean;
};

export const NavContentStyled = styled.div<NavContentStyledProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: ${({ theme: { spacing } }) => spacing(8)};
  height: auto;
  opacity: ${({ expand }) => (expand ? 1 : 0)};
  background-color: ${({ theme: { palette } }) => palette.navigationBackground};

  z-index: 4;
  padding-top: ${({ theme: { spacing } }) => spacing(8)}px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: ${({ expand }) => (expand ? `transform: translate3d(0, 0, 0);` : `translate3d(0, -252px, 0);`)};
  transition: transform 700ms cubic-bezier(0.77, 0, 0.175, 1), background-color 700ms ease, opacity 500ms ease;
`;
