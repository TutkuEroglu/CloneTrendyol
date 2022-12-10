import styled from "styled-components";

export const Navigation = styled.div`
height: 35px;
width: 1200px;
display: flex;
align-items: center;
justify-content: flex-start;
font-family: 'Source Sans Pro', sans-serif;
border-bottom: 1px solid #E8E8E8;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.lg}px`}) {
    max-width: 1200px;
    padding: 0 15px;
    box-sizing: border-box;
  }
  
  @media (max-width: ${({ theme }) => `${theme.breakPoints.xs}px`}) {
    max-width: 775px;
  }
`;

export const NavigationElements = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: ${({theme}) => theme.fontSizes.tiny};
color: ${({theme}) => theme.colors.newBg};
font-weight: 600;
flex: content;
cursor: pointer;
&:hover {
    color: ${({theme}) => theme.colors.newOrange};
    display:flex;
    background:linear-gradient(#F27A1A,#F27A1A) no-repeat;
    background-size:100% 1px;
    background-position:bottom;
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.xs}px`}) {
    font-size: 10px;
  }
`;