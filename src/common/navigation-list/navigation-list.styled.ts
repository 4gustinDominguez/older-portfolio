import styled from '../../styled-components';

export const NavigationListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({
      theme: {
        breakpoints: { mobile },
      },
    }) => mobile.maxWidth} {
    display: none;
  }
`;
