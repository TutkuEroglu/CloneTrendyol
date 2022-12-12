import styled from "styled-components";
import {ReactComponent as truck} from "../assets/svg/truck.svg";
import {ReactComponent as award} from "../assets/svg/award.svg";
import {ReactComponent as tag} from "../assets/svg/tag.svg";
import {ReactComponent as playcircle} from "../assets/svg/playcircle.svg";
import {ReactComponent as uparrow} from "../assets/svg/chevron-up.svg";
import {ReactComponent as downarrow} from "../assets/svg/chevron-down.svg";
import {ReactComponent as search} from "../assets/svg/search.svg";

export const BodyContainer = styled.div`
  width: 1200px;
  display: flex;
  font-family: 'Source Sans Pro', sans-serif;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.lg}px`}) {
    max-width: 1200px;
    padding: 0 10px;
    box-sizing: border-box;
  }
  
  @media (max-width: ${({ theme }) => `${theme.breakPoints.xs}px`}) {
    max-width: 775px;
    padding: 0 10px;
    box-sizing: border-box;
  }
`;

export const CategoryContainer = styled.div`
  width: 220px;
  margin-right: 10px;
  @media (max-width: ${({ theme }) => `${theme.breakPoints.xs}px`}) {
    max-width: 150px;
  }
`;

export const StickyLeftContainer = styled.div`
  position: sticky;
  top: -350px;
  bottom: 0;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.xs}px`}) {
    top: 0;
    bottom: auto;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  border-bottom: 1px solid #E8E8E8;
`;

export const StickyOption = styled.div`
  padding: 15px 5px 5px 5px;
  margin: 0 -5px 0 -5px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backGroundHover};
  }
`;

export const StickyOptionAlone = styled.div`
  padding: 10px 5px;
  box-sizing: border-box;
  margin: 0 -5px;
  display: flex;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.backGroundHover};
  }
`;

export const OptionSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-family: source_sans_prosemibold!important;
  color: ${({ theme }) => theme.colors.newBg};
  font-weight: 550;
  margin-bottom: 8px;
`;

export const OptionUpIcon = styled(uparrow)`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.newOrange};
`;

export const OptionDownIcon = styled(downarrow)`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.iconColor};
`;

export const HiddenOptionDiv = styled.div`
  max-height: 184px;
  display: flex;
  flex-direction: column;
`;

export const HiddenOptionFullDiv = styled.div`
  max-height: 184px;
  position: relative;
  margin-bottom: 15px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const HiddenOptionSpan = styled.span`
  color: ${({ theme }) => theme.colors.hiddenSpanColor};
  font-size: ${({ theme }) => theme.fontSizes.stiny};
  padding: 3px 0;

  &:hover {
    color: ${({ theme }) => theme.colors.hiddenSpanColorHover};
  }
`;

export const SelectedOptionSpan = styled.span`
  color: ${({ theme }) => theme.colors.newOrange};
  font-size: ${({ theme }) => theme.fontSizes.stiny};
  padding: 3px 0;
  font-weight: 600;
`;

export const SelectedOptionBack = styled.span`
  font-family: source_sans_proregular;
  font-size: ${({ theme }) => theme.fontSizes.stiny};
  padding: 20px 0 15px 0;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.newOrange};
  cursor: pointer;
`;

export const CardContainer = styled.div`
  width: 1000px;
  padding: 20px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => `${theme.breakPoints.xs}px`}) {
    max-width: 580px;
  }
`;

export const SearchHeader = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.inputColor};
  letter-spacing: normal;
  font-family: source_sans_prosemibold, sans-serif;
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
  background-color: ${({ theme }) => theme.colors.deliveryColor};
  border-radius: 6px;
  height: 68px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 15px;
  margin-left: 18px;
`;

export const Info = styled.div`
  display: flex;
  max-width: 330px;
`;

export const TruckIcon = styled(truck)`
  color: ${({ theme }) => theme.colors.truckIconColor};
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
  color: ${({ theme }) => theme.colors.bttnColor};
  background-color: ${({ theme }) => theme.colors.truckIconColor};
  margin-left: 10px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 3%);
  border-radius: 6px;
  padding: 10px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBackGround};
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  width: 1000px;
  
  @media (max-width: ${({ theme }) => `${theme.breakPoints.lg}px`}) {
    max-width: 800px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakPoints.xs}px`}) {
    max-width: 580px;
  }
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
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }

  &:not(hover) {
    box-shadow: none;
    transition: all 0.2s ease-in;
  }
  
  @media (max-width: ${({ theme }) => `${theme.breakPoints.lg}px`}) {
    margin-left: 35px;
  }
  
  @media (max-width: ${({ theme }) => `${theme.breakPoints.xs}px`}) {
    margin-left: 45px;
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

export const ImageOverlayHeader = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  margin: 3px;
  z-index: 10;
`;

export const FastDeliveryDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0 !important;
  margin: 5px 0 0 5px !important;
  border-radius: 3px;
  width: 56px !important;
  height: 25px !important;
  box-sizing: border-box;
  font: 10px/10px source_sans_prosemibold !important;
  color: ${({ theme }) => theme.colors.bttnColor};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.divBackGround};
`;

export const FreeDeliveryDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0 !important;
  margin: 5px 0 0 5px !important;
  border-radius: 3px;
  width: 56px !important;
  height: 25px !important;
  box-sizing: border-box;
  font: 10px/10px source_sans_prosemibold !important;
  color: ${({ theme }) => theme.colors.bttnColor};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.freeDeliveryDiv};
`;

export const LikeButtonDiv = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  z-index: 10;
`;

export const LikeButton = styled.i`
  float: left;
  width: 43px;
  height: 43px;
  background: url(https://cdn.dsmcdn.com/web/production/favorite-heart.svg) no-repeat;
  
  &:hover {
    background: url(https://cdn.dsmcdn.com/web/assets/favorite-heart-hover.svg) no-repeat;
  }
`;

export const StarProductImg = styled.img`
  width: 58px;
  height: 58px;
  margin: 5px 0 0 5px !important;
`;

export const ProductDown = styled.div`
  padding: 10px;
  margin-bottom: 5px;
  box-sizing: border-box;
`;

export const ContainerDiv = styled.span`
  display: flex;
`;

export const ImportantSpan = styled.span`
  font-family: source_sans_proregular, sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.inputColor};
  font-weight: 700;
  margin-right: 4px;
`;

export const ContainerSpan = styled.span`
  position: relative;
  line-height: normal;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.spanColor};
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
  color: ${({ theme }) => theme.colors.newOrange};
  font-weight: 550;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: oxygen-bold;
`;

export const CampaignDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 24px;
  gap: 5px;
`;

export const VideoContect = styled.div`
  background-color: ${({ theme }) => theme.colors.videoBackGround};
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
  color: ${({ theme }) => theme.colors.videoIcon};
  padding: 0 5px;
`;

export const VideoSpan = styled.span`
  color: ${({ theme }) => theme.colors.newBg};
  font-size: ${({ theme }) => theme.fontSizes.tinySmall};
  font-weight: 600;
`;

export const DiscountContect = styled.div`
  background-color: ${({ theme }) => theme.colors.discountContectBg};
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
  color: ${({ theme }) => theme.colors.newOrange};
  padding: 0 5px;
`;

export const DiscountSpan = styled.span`
  color: ${({ theme }) => theme.colors.newBg};
  font-size: ${({ theme }) => theme.fontSizes.tinySmall};
  font-weight: 600;
`;

export const CouponContect = styled.div`
  background-color: ${({ theme }) => theme.colors.couponContectBg};
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
  color: ${({ theme }) => theme.colors.couponIcon};
  padding: 0 5px;
`;

export const CouponSpan = styled.span`
  color: ${({ theme }) => theme.colors.newBg};
  font-size: ${({ theme }) => theme.fontSizes.tinySmall};
  font-weight: 600;
`;

export const CheckBoxFullLabel = styled.label`
  display: block;
  margin: 0.2em;
  cursor: pointer;
  padding: 0.1em;
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fontSizes.stiny};
  color: ${({ theme }) => theme.colors.hiddenSpanColor};

  &:before {
    border: 0.1em solid #d6d6d6;
    border-radius: 0.2em;
    display: inline-block;
    content: '';
    width: 0.8em;
    height: 0.8em;
    padding-left: 0.2em;
    padding-bottom: 0.2em;
    margin-right: 0.5em;
    vertical-align: bottom;
    color: transparent;
    transition: .2s;
    opacity: 1;
    background: url(https://cdn.dsmcdn.com/web/assets/check.svg) no-repeat center center;
  }

  &:active:before {
    transform: scale(0);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.checkboxHover};
  }
`;

export const PriceLabel = styled.label`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 6px;
  font-size: ${({ theme }) => theme.fontSizes.stiny};
  display: flex;
  align-items: center;
`;

export const CheckBoxInput = styled.input`
  margin-right: 5px;
  display: none;

  &:checked + ${CheckBoxFullLabel}:before {
    color: ${({ theme }) => theme.colors.mobileMenuLinks};
    background-color: ${({ theme }) => theme.colors.newOrange};
    border: solid 1.5px #f27a1a;
  }

  &:checked:disabled + ${CheckBoxFullLabel}:before {
    transform: scale(1);
    background-color: ${({ theme }) => theme.colors.checkboxColor};
    border-color: ${({ theme }) => theme.colors.checkboxColor};
  }
`;

export const CheckBoxLabel = styled.label`
  display: block;
  cursor: pointer;
  font-size: 13px;
  font-weight: 550;
  min-height: 25px;

  &:before {
    border: 0.1em solid #d6d6d6;
    border-radius: 0.2em;
    display: inline-block;
    content: '';
    width: 1em;
    height: 1em;
    padding-left: 0.2em;
    padding-bottom: 0.2em;
    margin-right: 0.5em;
    vertical-align: bottom;
    color: transparent;
    transition: .2s;
    opacity: 1;
    background: url(https://cdn.dsmcdn.com/web/assets/check.svg) no-repeat center center;
  }
  &:active:before {
    transform: scale(0);
  }

  &:hover {
    color: #B5B5B5;
  }
`;

export const CheckBoxDoubleInput = styled.input`
  margin-right: 5px;
  display: none;
  &:checked + ${CheckBoxLabel}:before {
    color: #fff;
    background-color: #f27a1a;
    border: solid 1.5px #f27a1a;
  }
  &:checked:disabled + ${CheckBoxLabel}:before {
    transform: scale(1);
    background-color: #bfb;
    border-color: #bfb;
  }
`;


export const OptionSpanAlone = styled.label`
  display: block;
  margin: 0.2em;
  cursor: pointer;
  padding: 0.2em;
  font-size: 13px;
  &:before {

    border: 0.1em solid #d6d6d6;
    border-radius: 0.2em;
    display: inline-block;
    content: '';
    width: 1em;
    height: 1em;
    padding-left: 0.2em;
    padding-bottom: 0.2em;
    margin-right: 0.5em;
    vertical-align: bottom;
    color: transparent;
    transition: .2s;
    opacity: 1;
    background: url(https://cdn.dsmcdn.com/web/assets/check.svg) no-repeat center center;
  }
  &:active:before {
    transform: scale(0);
  }
`;

export const CheckBoxInputAlone = styled.input`
  display: none;

  &:checked + ${OptionSpanAlone}:before {
    color: #fff;
    background-color: #f27a1a;
    border: solid 1.5px #f27a1a;
  }
  &:checked:disabled + ${OptionSpanAlone}:before {
    transform: scale(1);
    background-color: #bfb;
    border-color: #bfb;
  }
`;

export const RadioInput = styled.input`
  margin-bottom: 3px;
  margin-right: 5px;
`;

export const EmptyDiv = styled.div``;

export const SearchBrandInput = styled.input`
  width: 87%;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.searchInput};
  border: solid 1px #e2e2e2;
  border-radius: 6px;
  margin-bottom: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  position: sticky;
  top: auto;
  bottom: 0;
  outline: none;
`;

export const ColorDiv = styled.div`
  max-height: 100%;
  display: flex;
  overflow-y: hidden;
  flex-wrap: wrap;
  max-width: 200px;
  cursor: default;
`;

export const ColorDivBg = styled.div`
  margin: 2px;
  padding: 0;
  height: 32px;
  display: flex;
  width: 32px;
  justify-content: center;
`;

export const CircularColor = styled.div`
  border-radius: 100%;
  width: 24px;
  height: 24px;
  margin: 0;
  border: 1px solid #A0A0A0;
  background: ${({colour}) => colour && `${colour}`};
  cursor: pointer;
`;

export const PriceInputDiv = styled.div`
  position: relative;
  margin: 0;
  max-height: 184px;
  font-size: 14px;
  cursor: default;
`;

export const PriceInput = styled.input`
  margin-bottom: 5px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.searchInput};
  border: solid 1px #e2e2e2;
  border-radius: 6px;
  width: 56px;
  font-size: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
  }
`;

export const PriceDivSpan = styled.span`
  display: inline-block;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.priceDiv};
  margin-left: 6px;
  margin-right: 6px;
`;

export const PriceIcon = styled(search)`
  margin-bottom: 5px;
  float: right;
  width: 18px;
  height: 18px;
  border: none;
  vertical-align: bottom;
  margin-top: 6px;
  border-radius: 3px;
  cursor: pointer;
  color: grey;
`;