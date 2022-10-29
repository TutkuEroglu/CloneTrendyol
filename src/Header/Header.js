import React from 'react'
import "./Header.css"

const Header = () => {

  return (
    <div className="Header">
      <div className="TopHeader">
        <span className="DiscountSpan">İndirim Kuponlarım</span>
        <span className="MakeSaleSpan">Trendyol'da Satış Yap</span>
        <span className="SupportSpan">Yardım & Destek</span>
      </div>
      <div className="StickyHeader">
        
      </div>
    </div>
  )
}

export default Header