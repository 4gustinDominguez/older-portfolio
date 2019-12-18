import styled from '../../styled-components';

export const NavBarExpandableContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  ${({
    theme: {
      breakpoints: { desktop },
    },
  }) => desktop} {
    display: none;
  }
`;
