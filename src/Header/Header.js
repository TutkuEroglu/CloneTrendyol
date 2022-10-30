import React, {useState} from 'react'
import "./Header.css"
import headerIcon from "../assets/ty-web.svg"

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
    <div className="Header">
      <div className="TopHeader">
        <span className="DiscountSpan">İndirim Kuponlarım</span>
        <span className="MakeSaleSpan">Trendyol'da Satış Yap</span>
        <span className="SupportSpan">Yardım & Destek</span>
      </div>
      <div className="StickyHeader">
        <img className="StickyIcon" src={headerIcon} alt="headerIcon"/>

        <div className="MiddleHeader">
          <input className="MiddleInput" placeholder="Aradığınız ürün, kategori veya markayı yazınız"/>
          <i className="bi bi-search SearchIcon"></i>
        </div>
        
        <div className="StickyHeaderButtons">
          <div className="MyAccount" onMouseOver={AccountHandleMouseOver} onMouseOut={AccountHandleMouseOut}>
            <i className={accountIsHovering ? "bi bi-person-fill MyAccountFillIcon" : "bi bi-person MyAccountIcon"}></i>
            <span className="MyAccountSpan">Hesabım</span>
          </div>
          <div className="MyFavorites" onMouseOver={FavoriteshandleMouseOver} onMouseOut={FavoritesHandleMouseOut}>
            <i className={favoriteIsHovering ? "bi bi-heart-fill MyFavoritesFillIcon" : "bi bi-heart MyFavoritesIcon"} ></i>
            <span className="MyFavoritesSpan">Favorilerim</span>
          </div>
          <div className="MyBasket" onMouseOver={BasketHandleMouseOver} onMouseOut={BasketHandleMouseOut}>
            <i className={basketIsHovering ? "bi bi-cart-fill MyBasketFillIcon" : "bi bi-cart MyBasketIcon"}></i>
            <span className="MyBasketSpan">Sepetim</span>
          </div>  
        </div>

      </div>
    </div>
  )
}

export default Header