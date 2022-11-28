import styled from "styled-components";
import { ReactComponent as truck } from "../assets/svg/truck.svg";
import {ReactComponent as person} from "../assets/svg/person.svg";

export const BodyContainer = styled.div`
min-width: 1200px;
display: flex;
align-items: center;
font-family: 'Source Sans Pro', sans-serif;
`;

export const CategoryContainer = styled.div`
  min-width: 200px;
`;

export const CardContainer = styled.div`
  min-width: 1000px;
  padding: 20px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const SearchHeader = styled.span`
  font-size: 18px;
  color: #333;
  letter-spacing: normal;
  font-family: source_sans_prosemibold,sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 20px;
`;

export const FastDelivery = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #DEFFED;
  border-radius: 6px;
  height: 68px;
  padding: 0 20px;
  margin-bottom: 15px;
  margin-left: 20px;
`;

export const Info = styled.div`
  display: flex;
  max-width: 330px;
`;

export const TruckIcon = styled(truck)`
  color: #0BC15C;
  margin-top: 2px;
  margin-right: 15px;
`;

export const DeliverySpan = styled.span`
  margin-right: 4px;
  font-family: source_sans_proregular;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
`;

export const DeliveryButton = styled.a`
  font-size: 14px;
  font-family: source_sans_proregular;
  font-weight: 600;
  color: #fff;
  background-color: #0BC15C;
  margin-left: 10px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 3%);
  border-radius: 6px;
  padding: 10px 16px;
  cursor: pointer;

  &:hover {
    background-color: #099847;
  }
`;