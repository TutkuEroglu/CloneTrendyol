import styled from "styled-components";

export const Navigation = styled.div`
height: 35px;
width: 1200px;
display: flex;
align-items: center;
justify-content: flex-start;
font-family: 'Source Sans Pro', sans-serif;
border-bottom: 1px solid #E8E8E8;
`;

export const NavigationElements = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 12px;
color: #333333;
font-weight: 600;
flex: content;
&:hover {
    color: #F27A1A;
    display:flex;
    background:linear-gradient(#F27A1A,#F27A1A) no-repeat;
    background-size:100% 1px;
    background-position:bottom;
    cursor: pointer;
  }
`;