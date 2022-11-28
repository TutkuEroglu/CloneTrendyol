import React from 'react'
import "./style.js"
import {
  BodyContainer,
  CardContainer,
  CategoryContainer, DeliveryButton,
  DeliverySpan,
  FastDelivery,
  Info,
  SearchHeader,
  TruckIcon
} from './style.js'

const Container = () => {
  return (
    <BodyContainer>
        <CategoryContainer>

        </CategoryContainer>
        <CardContainer>
          <SearchHeader>"Eşofman" araması için 100.000+ sonuç listeleniyor</SearchHeader>
          <FastDelivery>
            <Info>
              <TruckIcon/>
              <DeliverySpan>Hızlı Teslimat</DeliverySpan>
              yapılan ürünleri göster.
            </Info>
            <DeliveryButton>Uygula</DeliveryButton>
          </FastDelivery>
          
        </CardContainer>
    </BodyContainer>
  )
}

export default Container;