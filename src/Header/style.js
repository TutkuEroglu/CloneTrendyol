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
  background-color: ${({ theme }) => theme.colors.whiteBg};
`;

export const TopHeader = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => theme.colors.card};
  font-size: 12px;
`;

export const DiscountSpan = styled.span`
  padding: 10px 10px 0 10px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const MakeSaleSpan = styled.span`
  padding: 10px 10px 0 10px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const SupportSpan = styled.span`
  padding: 10px 0 0 10px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
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
  background-color: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.inputColor};

  &:focus {
    border-color: ${({ theme }) => theme.colors.newOrange};
    transition: all ease 0.3s;
  }

  &:focus + .SearchIcon {
    border-color: ${({ theme }) => theme.colors.newOrange};
    transition: all ease 0.3s;
  }
`;

export const SearchIcon = styled.div`
  border: 2px solid rgba(0, 0, 0, 0);
  border-left: none;
  color: ${({ theme }) => theme.colors.newOrange};
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  height: 35px;
  width: 35px;
  -webkit-text-stroke: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.iconBg};
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
  color: ${({ theme }) => theme.colors.cardTitles};
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
    color: ${({ theme }) => theme.colors.newOrange};
    transition: all ease 0.4s;
  }
`;

export const MyAccountSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.stiny};
  cursor: pointer;

  ${MyAccount}:hover & {
    color: ${({ theme }) => theme.colors.newOrange};
  }
`;

export const MyFavorites = styled.div`
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.cardTitles};
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
    color: ${({ theme }) => theme.colors.newOrange};
  }
`;

export const MyFavoritesSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.stiny};

  ${MyFavorites}:hover & {
    color: ${({ theme }) => theme.colors.newOrange};
  }
`;

export const MyBasket = styled.div`
  padding: 0 0 0 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.cardTitles};
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
    color: ${({ theme }) => theme.colors.newOrange};
    transition: all ease 0.4s;
  }
`;

export const MyBasketSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.stiny};

  ${MyBasket}:hover & {
    color: ${({ theme }) => theme.colors.newOrange};
  }
`;
