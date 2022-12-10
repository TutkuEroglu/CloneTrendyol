import styled  from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  @media (max-width: ${({ theme }) => `${theme.breakPoints.lg}px`}) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;