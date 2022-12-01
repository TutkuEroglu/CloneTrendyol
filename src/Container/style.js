import styled from "styled-components";
import { ReactComponent as truck } from "../assets/svg/truck.svg";
import { ReactComponent as award } from "../assets/svg/award.svg";
import { ReactComponent as tag } from "../assets/svg/tag.svg";
import { ReactComponent as playcircle } from "../assets/svg/playcircle.svg";


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
  margin-left: 18px;
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
  margin-left: 18px;
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

export const ContainerInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  max-width: 1000px;
  width: 1000px;
 `;

export const Cards = styled.div`
  height: 496px;
  width: 231px;
  position: relative;
  margin-bottom: 20px;
  margin-left: 18px;
  border: 1px solid #E6E6E6;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
 
 &:hover {
  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;
 }
 
 &:not(hover) {
   box-shadow: none;
   transition: all 0.2s ease-in;
 }
 
`;

export const ImageContainer = styled.div`
 position: relative;
 height: 350px;
`;

export const CardImage = styled.div`
 overflow: hidden;
 border-top-left-radius: 8px;
 border-top-right-radius: 8px;
 width: 229px;
 height: 347px;
`;

export const Images = styled.img`
 border-top-left-radius: 8px;
 border-top-right-radius: 8px;
 width: 229px;
 height: 347px;
 
 &:hover {
  transform: scale(1.043);
  transition: transform 0.5s ease;
  border: none;
 }

 &:not(hover) {
  transform: scale(1);
  transition: all 0.2s ease-in;
 }
`;

export const ProductDown = styled.div`
 padding: 10px;
 margin-bottom: 5px;
`;

export const ContainerDiv = styled.span`
  display: flex;
`;

export const ImportantSpan = styled.span`
 font-family: source_sans_proregular,sans-serif;
 font-size: 14px;
 color: #333;
 font-weight: 700;
 margin-right: 4px;
`;

export const ContainerSpan = styled.span`
 position: relative;
 line-height: normal;
 font-size: 14px;
 color: #666;
 margin: 2px 0;
 box-sizing: border-box;
 text-align: left;
`;

export const PriceDiv = styled.div`
 height: 45px;
 display: flex;
 flex-direction: column;
 justify-content: center;
`;

export const PriceSpan = styled.span`
 display: flex;
 height: 16px;
 min-height: 28px;
 white-space: nowrap;
 color: #f27a1a;
 font-weight: 550;
 font-size: 16px;
 font-family: oxygen-bold;
`;

export const CampaignDiv = styled.div`
 display: flex;
 flex-direction: row;
 height: 24px;
 gap: 5px;
`;

export const VideoContect = styled.div`
 background-color: #ebf5ff;
 border-radius: 4px;
 padding-right: 5px;
 padding-top: 2px;
 padding-bottom: 2px;
 display: flex;
 align-items: center;
 box-sizing: border-box;
`;

export const VideoIcon = styled(playcircle)`
 width: 14px;
 height: 14px;
 color: #4A90E2;
 padding: 0 5px;
`;

export const VideoSpan = styled.span`
 color: #333333;
 font-size: 11px;
 font-weight: 600;
`;

export const DiscountContect = styled.div`
 background-color: #FFF6EE;
 border-radius: 4px;
 padding-right: 5px;
 padding-top: 2px;
 padding-bottom: 2px;
 display: flex;
 align-items: center;
 box-sizing: border-box;
`;

export const DiscountIcon = styled(tag)`
 width: 14px;
 height: 14px;
 color: #F27A1A;
 padding: 0 5px;
`;

export const DiscountSpan = styled.span`
 color: #333333;
 font-size: 11px;
 font-weight: 600;
`;

export const CouponContect = styled.div`
 background-color: #FFF0F5;
 border-radius: 4px;
 padding-right: 5px;
 padding-top: 2px;
 padding-bottom: 2px;
 display: flex;
 align-items: center;
 box-sizing: border-box;
`;

export const CouponIcon = styled(award)`
 width: 14px;
 height: 14px;
 color: #FF4988;
 padding: 0 5px;
`;

export const CouponSpan = styled.span`
 color: #333333;
 font-size: 11px;
 font-weight: 600;
`;