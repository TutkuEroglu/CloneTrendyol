import React from 'react'
import "./style.js"
import {
  BodyContainer, CampaignDiv,
  CardContainer, CardImage, Cards,
  CategoryContainer, ContainerDiv, ContainerInfo, ContainerSpan, CouponContect, CouponIcon, CouponSpan, DeliveryButton,
  DeliverySpan, DiscountContect, DiscountIcon, DiscountSpan,
  FastDelivery, ImageContainer, Images, ImportantSpan,
  Info, PriceDiv, PriceSpan, ProductDown,
  SearchHeader,
  TruckIcon, VideoContect, VideoIcon, VideoSpan
} from './style.js'
import ContainerList from "./ContainerList";
import {formatStar} from "../Utils/starFormatter";

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
        <ContainerInfo>
          {ContainerList.map(val =>
            <Cards>
              <ImageContainer><CardImage><Images src={val.src}></Images></CardImage></ImageContainer>
              <ProductDown>
                <ContainerDiv>
                  <ContainerSpan><ImportantSpan>{val.tag}</ImportantSpan>{val.name}</ContainerSpan>
                </ContainerDiv>
                {formatStar(val.star, val.view)}
                <PriceDiv>
                  <PriceSpan>{val.price} TL</PriceSpan>
                </PriceDiv>

                  <CampaignDiv>
                    {val.video ? (
                    <VideoContect><VideoIcon /><VideoSpan>Videolu Ürün</VideoSpan></VideoContect>
                    ) : ""}
                    {val.coupon ? (
                      <CouponContect><CouponIcon /><CouponSpan>Kupon Fırsatı</CouponSpan></CouponContect>
                    ) : ""}
                    {val.discount ? (
                      <DiscountContect><DiscountIcon /><DiscountSpan>Çok Al Az Öde</DiscountSpan></DiscountContect>
                    ) : ""}
                  </CampaignDiv>


              </ProductDown>
            </Cards>
          )}
        </ContainerInfo>
      </CardContainer>
    </BodyContainer>
  )
}

export default Container;