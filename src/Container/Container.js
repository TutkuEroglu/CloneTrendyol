import React, {useState} from 'react'
import "./style.js"
import {
  BodyContainer, CampaignDiv,
  CardContainer, CardImage, Cards,
  CategoryContainer, ContainerDiv, ContainerInfo, ContainerSpan, CouponContect, CouponIcon, CouponSpan, DeliveryButton,
  DeliverySpan, DiscountContect, DiscountIcon, DiscountSpan,
  FastDelivery, HiddenOptionDiv, HiddenOptionSpan, ImageContainer, Images, ImportantSpan,
  Info, OptionContainer, OptionDownIcon, OptionSpan, OptionUpIcon, PriceDiv, PriceSpan, ProductDown,
  SearchHeader, SelectedOptionBack, SelectedOptionSpan, StickyLeftContainer, StickyOption,
  TruckIcon, VideoContect, VideoIcon, VideoSpan
} from './style.js'
import ContainerList from "./ContainerList";
import {formatStar} from "../Utils/starFormatter";

const Container = () => {
  const [category, setCategory] = useState(false);
  const [sweatPants, setSweatPants] = useState(false);
  const [trackSuit, setTrackSuit] = useState(false);

  return (
    <BodyContainer>
      <CategoryContainer>
        <StickyLeftContainer>
          <OptionContainer>
          <StickyOption  onClick={sweatPants || trackSuit ?  "" : () => setCategory(!category)}>
            <OptionSpan>İlgili Kategoriler</OptionSpan>
            {category ? <OptionUpIcon/> : <OptionDownIcon/>}
          </StickyOption>
            {category ? (
              <HiddenOptionDiv>
                <HiddenOptionSpan onClick={() => {setSweatPants(true);setCategory(false)}}>Eşofman Altı</HiddenOptionSpan>
                <HiddenOptionSpan onClick={() => {setTrackSuit(true);setCategory(false)}}>Eşofman Takımı</HiddenOptionSpan>
              </HiddenOptionDiv>
            ) : ""}
            {sweatPants ? (
              <HiddenOptionDiv>
                <SelectedOptionSpan>Eşofman Altı</SelectedOptionSpan>
                <SelectedOptionBack onClick={() => {setSweatPants(false);setCategory(true)}}>ÖNCEKİ KATEGORİLERE GERİ DÖN</SelectedOptionBack>
              </HiddenOptionDiv>
            ) : ""}
            {trackSuit ? (
              <HiddenOptionDiv>
                <SelectedOptionSpan>Eşofman Takımı</SelectedOptionSpan>
                <SelectedOptionBack onClick={() => {setTrackSuit(false);setCategory(true)}}>ÖNCEKİ KATEGORİLERE GERİ DÖN</SelectedOptionBack>
              </HiddenOptionDiv>
            ) : ""}
          </OptionContainer>

        </StickyLeftContainer>
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
                    <VideoContect><VideoIcon/><VideoSpan>Videolu Ürün</VideoSpan></VideoContect>
                  ) : ""}
                  {val.coupon ? (
                    <CouponContect><CouponIcon/><CouponSpan>Kupon Fırsatı</CouponSpan></CouponContect>
                  ) : ""}
                  {val.discount ? (
                    <DiscountContect><DiscountIcon/><DiscountSpan>Çok Al Az Öde</DiscountSpan></DiscountContect>
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