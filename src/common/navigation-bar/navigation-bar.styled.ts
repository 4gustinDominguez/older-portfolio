import styled from '../../styled-components';

export const NavigationBarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  @media ${({
      theme: {
        breakpoints: { mobile },
      },
    }) => mobile.minWidth} {
    display: none;
  }
`;