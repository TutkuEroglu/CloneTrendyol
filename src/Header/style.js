import styled from "styled-components";
import { ReactComponent as headerIcon } from "../assets/svg/ty-web.svg";
import { ReactComponent as person } from "../assets/svg/person.svg";
import { ReactComponent as personfill } from "../assets/svg/person-fill.svg";
import { ReactComponent as cart } from "../assets/svg/cart.svg";
import { ReactComponent as cartfill } from "../assets/svg/cart-fill.svg";
import { ReactComponent as heart } from "../assets/svg/heart.svg";
import { ReactComponent as heartfill } from "../assets/svg/heart-fill.svg";

export const HeaderApp = styled.div`
  height: 86px;
  width: 1200px;
  font-family: "Source Sans Pro", sans-serif;
  background-color: #ffffff;
`;

export const TopHeader = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: rgb(156, 156, 156);
  font-size: 12px;
`;

export const DiscountSpan = styled.span`
  padding: 10px 10px 0 10px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    color: rgb(60, 60, 60);
  }
`;

export const MakeSaleSpan = styled.span`
  padding: 10px 10px 0 10px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    color: rgb(60, 60, 60);
  }
`;

export const SupportSpan = styled.span`
  padding: 10px 0 0 10px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    color: rgb(60, 60, 60);
  }
`;

export const StickyHeader = styled.div`
  height: 66px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StickyIcon = styled(headerIcon)`
  width: 146px;
  height: 100%;
  margin-top: 5px;
  cursor: pointer;
`;

export const MiddleHeader = styled.div`
  width: 598px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MiddleInput = styled.input`
  flex: 1;
  padding: 10px 40px 10px 15px;
  border: 2px solid rgba(0, 0, 0, 0);
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  box-sizing: border-box;
  border-right: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  color: #333;

  &:focus {
    border-color: #f27a1a;
    transition: all ease 0.3s;
  }

  &:focus + .SearchIcon {
    border-color: #f27a1a;
    transition: all ease 0.3s;
  }
`;

export const SearchIcon = styled.div`
  border: 2px solid rgba(0, 0, 0, 0);
  border-left: none;
  color: #f27a1a;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  height: 35px;
  width: 35px;
  -webkit-text-stroke: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
  cursor: pointer;
`;

export const StickyHeaderButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MyAccount = styled.div`
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1b1b1b;
`;

export const MyAccountIcon = styled(person)`
  padding: 0 5px;
  box-sizing: border-box;
  -webkit-text-stroke: 0.2px;
  height: 28px;
  width: 28px;
`;

export const MyAccountFillIcon = styled(personfill)`
  height: 28px;
  width: 28px;
  padding: 0 5px;
  box-sizing: border-box;
  -webkit-text-stroke: 0.2px;

  ${MyAccount}:hover & {
    color: #f27a1a;
    transition: all ease 0.4s;
  }
`;

export const MyAccountSpan = styled.span`
  font-size: 13px;
  cursor: pointer;

  ${MyAccount}:hover & {
    color: #f27a1a;
  }
`;

export const MyFavorites = styled.div`
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1b1b1b;
  cursor: pointer;
`;

export const MyFavoritesIcon = styled(heart)`
  height: 26px;
  width: 26px;
  padding: 0 5px;
  box-sizing: border-box;
  -webkit-text-stroke: 0.2px;
`;

export const MyFavoritesFillIcon = styled(heartfill)`
  height: 26px;
  width: 26px;
  padding: 0 5px;
  box-sizing: border-box;
  -webkit-text-stroke: 0.2px;

  ${MyFavorites}:hover & {
    transition: all ease 0.4s;
    color: #f27a1a;
  }
`;

export const MyFavoritesSpan = styled.span`
  font-size: 13px;

  ${MyFavorites}:hover & {
    color: #F27A1A;
  }
`;

export const MyBasket = styled.div`
padding: 0 15px;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
color: #1b1b1b;
cursor: pointer;
`;

export const MyBasketIcon = styled(cart)`
  height: 26px;
  width: 26px;
  padding: 0 5px;
  box-sizing: border-box;
  -webkit-text-stroke: 0.2px;
`;

export const MyBasketFillIcon = styled(cartfill)`
  height: 26px;
  width: 26px;
  padding: 0 5px;
  box-sizing: border-box;
  -webkit-text-stroke: 0.2px;

  ${MyBasket}:hover & {
    color: #f27a1a;
    transition: all ease 0.4s;
  }
`;

export const MyBasketSpan = styled.span`
  font-size: 13px;

  ${MyBasket}:hover & {
    color: #F27A1A;
  }
`;
