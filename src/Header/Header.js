import React, { useState } from "react";
import {
  HeaderApp,
  TopHeader,
  DiscountSpan,
  MakeSaleSpan,
  SupportSpan,
  StickyHeader,
  StickyIcon,
  MiddleHeader,
  MiddleInput,
  SearchIcon,
  StickyHeaderButtons,
  MyAccount,
  MyAccountSpan,
  MyFavorites,
  MyFavoritesSpan,
  MyBasket,
  MyBasketSpan,
  MyBasketFillIcon,
  MyAccountFillIcon,
  MyAccountIcon,
  MyFavoritesFillIcon,
  MyFavoritesIcon,
  MyBasketIcon,
} from "./style.js";

const Header = () => {
  const [accountIsHovering, setAccountIsHovering] = useState(false);
  const [favoriteIsHovering, setFavoriteIsHovering] = useState(false);
  const [basketIsHovering, setBasketIsHovering] = useState(false);

  const AccountHandleMouseOver = () => {
    setAccountIsHovering(true);
  };

  const AccountHandleMouseOut = () => {
    setAccountIsHovering(false);
  };

  const FavoriteshandleMouseOver = () => {
    setFavoriteIsHovering(true);
  };

  const FavoritesHandleMouseOut = () => {
    setFavoriteIsHovering(false);
  };

  const BasketHandleMouseOver = () => {
    setBasketIsHovering(true);
  };

  const BasketHandleMouseOut = () => {
    setBasketIsHovering(false);
  };

  return (
    <HeaderApp>
      <TopHeader>
        <DiscountSpan>İndirim Kuponlarım</DiscountSpan>
        <MakeSaleSpan>Trendyolda Satış Yap</MakeSaleSpan>
        <SupportSpan>Yardım & Destek</SupportSpan>
      </TopHeader>
      <StickyHeader>
        <StickyIcon alt="headerIcon" />

        <MiddleHeader>
          <MiddleInput placeholder="Aradığınız ürün, kategori veya markayı yazınız" />
          <SearchIcon className="bi bi-search SearchIcon"></SearchIcon>
        </MiddleHeader>

        <StickyHeaderButtons>
          <MyAccount
            onMouseOver={AccountHandleMouseOver}
            onMouseOut={AccountHandleMouseOut}
          >
            {accountIsHovering ? <MyAccountFillIcon /> : <MyAccountIcon />}

            <MyAccountSpan>Hesabım</MyAccountSpan>
          </MyAccount>
          <MyFavorites
            onMouseOver={FavoriteshandleMouseOver}
            onMouseOut={FavoritesHandleMouseOut}
          >
            {favoriteIsHovering ? <MyFavoritesFillIcon /> : <MyFavoritesIcon />}
            <MyFavoritesSpan>Favorilerim</MyFavoritesSpan>
          </MyFavorites>
          <MyBasket
            onMouseOver={BasketHandleMouseOver}
            onMouseOut={BasketHandleMouseOut}
          >
            {basketIsHovering ? <MyBasketFillIcon /> : <MyBasketIcon />}
            <MyBasketSpan>Sepetim</MyBasketSpan>
          </MyBasket>
        </StickyHeaderButtons>
      </StickyHeader>
    </HeaderApp>
  );
};

export default Header;
