import React, {useState} from 'react'
import "./style.js"
import {
  BodyContainer,
  CampaignDiv,
  CardContainer,
  CardImage,
  Cards,
  CategoryContainer, CheckBoxFullLabel, CheckBoxInput,
  CheckBoxLabel, CircularColor, ColorDiv, ColorDivBg,
  ContainerDiv,
  ContainerInfo,
  ContainerSpan,
  CouponContect,
  CouponIcon,
  CouponSpan,
  DeliveryButton,
  DeliverySpan,
  DiscountContect,
  DiscountIcon,
  DiscountSpan,
  FastDelivery, HiddenFullDiv,
  HiddenOptionDiv, HiddenOptionFullDiv,
  HiddenOptionSpan,
  ImageContainer,
  Images,
  ImportantSpan,
  Info,
  OptionContainer,
  OptionDownIcon,
  OptionSpan,
  OptionUpIcon,
  PriceDiv, PriceDivSpan, PriceIcon, PriceInput, PriceInputDiv,
  PriceSpan,
  ProductDown, RadioInput, SearchBrandInput,
  SearchHeader,
  SelectedOptionBack,
  SelectedOptionSpan,
  StickyLeftContainer,
  StickyOption,
  TruckIcon,
  VideoContect,
  VideoIcon,
  VideoSpan
} from './style.js'
import ContainerList from "./ContainerList";
import {formatStar} from "../Utils/starFormatter";
import {BodySize, BrandList, Colours, PriceList, StarProductList, TrotterType} from "../ArrayList/List";

const Container = () => {
  const [category, setCategory] = useState(false);
  const [gender, setGender] = useState("");
  const [sweatPants, setSweatPants] = useState(false);
  const [trackSuit, setTrackSuit] = useState(false);
  const [isCheckedWoman, setIsCheckedWoman] = useState(true);
  const [isCheckedMan, setIsCheckedMan] = useState(true);
  const [brand, setBrand] = useState(false);
  const [bodySize, setBodySize] = useState(false);
  const [color, setColor] = useState(false);
  const [priceCategory, setPriceCategory] = useState(false);
  const [starCategory, setStarCategory] = useState(false);
  const [trotterCategory, setTrotterCategory] = useState(false);
  const [price, setPrice] = useState("");

  const handleCheckboxChange = event => {
    if (event.target.value === "Erkek") {
      setIsCheckedMan(event.target.checked);
    } else {
      setIsCheckedWoman(event.target.checked);
    }
    setGender(event.target.value);
  };

  return (
    <BodyContainer>
      <CategoryContainer>
        <StickyLeftContainer>
          <OptionContainer>
            <StickyOption onClick={sweatPants || trackSuit ? "" : () => setCategory(!category)}>
              <OptionSpan>İlgili Kategoriler</OptionSpan>
              {category ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {category && (
              <HiddenOptionDiv>
                <HiddenOptionSpan onClick={() => {
                  setSweatPants(true);
                  setCategory(false)
                }}>Eşofman Altı</HiddenOptionSpan>
                <HiddenOptionSpan onClick={() => {
                  setTrackSuit(true);
                  setCategory(false)
                }}>Eşofman Takımı</HiddenOptionSpan>
              </HiddenOptionDiv>
            )}
            {sweatPants && (
              <HiddenOptionDiv>
                <SelectedOptionSpan>Eşofman Altı</SelectedOptionSpan>
                <SelectedOptionBack onClick={() => {
                  setSweatPants(false);
                  setCategory(true)
                }}>ÖNCEKİ KATEGORİLERE GERİ DÖN</SelectedOptionBack>
              </HiddenOptionDiv>
            )}
            {trackSuit && (
              <HiddenOptionDiv>
                <SelectedOptionSpan>Eşofman Takımı</SelectedOptionSpan>
                <SelectedOptionBack onClick={() => {
                  setTrackSuit(false);
                  setCategory(true)
                }}>ÖNCEKİ KATEGORİLERE GERİ DÖN</SelectedOptionBack>
              </HiddenOptionDiv>
            )}
          </OptionContainer>
          <OptionContainer>
            <StickyOption onClick={() => setGender(!gender)}>
              <OptionSpan>Cinsiyet</OptionSpan>
              {gender ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {gender && (
              <HiddenOptionDiv>
                <CheckBoxLabel><CheckBoxInput type="checkbox" value="Kadın" checked={isCheckedWoman}
                                              onChange={handleCheckboxChange}/>Kadın</CheckBoxLabel>
                <CheckBoxLabel><CheckBoxInput type="checkbox" value="Erkek" checked={isCheckedMan}
                                              onChange={handleCheckboxChange}/>Erkek</CheckBoxLabel>
              </HiddenOptionDiv>
            )}
          </OptionContainer>
          <OptionContainer>
            <StickyOption onClick={() => setBrand(!brand)}>
              <OptionSpan>Marka</OptionSpan>
              {brand ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {brand && (
              <HiddenOptionFullDiv>
                <SearchBrandInput placeholder="Marka ara"/>
                {BrandList.map(val =>
                  <CheckBoxFullLabel key={val.id}><CheckBoxInput type="checkbox" value={val.text}/>{val.text}
                  </CheckBoxFullLabel>
                )}
              </HiddenOptionFullDiv>
            )}
          </OptionContainer>
          <OptionContainer>
            <StickyOption onClick={() => setBodySize(!bodySize)}>
              <OptionSpan>Beden</OptionSpan>
              {bodySize ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {bodySize && (
              <HiddenOptionFullDiv>
                <SearchBrandInput placeholder="Beden ara"/>
                {BodySize.map(val =>
                  <CheckBoxFullLabel key={val.id}><CheckBoxInput type="checkbox" value={val.text}/>{val.text}
                  </CheckBoxFullLabel>
                )}
              </HiddenOptionFullDiv>
            )}
          </OptionContainer>
          <OptionContainer>
            <StickyOption onClick={() => setColor(!color)}>
              <OptionSpan>Renk</OptionSpan>
              {color ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {color && (
              <ColorDiv>
                {Colours.map(val =>
                  <ColorDivBg>
                    <CircularColor colour={val.colorText}></CircularColor>
                  </ColorDivBg>
                )}
              </ColorDiv>
            )}
          </OptionContainer>

          <OptionContainer>
            <StickyOption onClick={() => setPriceCategory(!priceCategory)}>
              <OptionSpan>Fiyat</OptionSpan>
              {priceCategory ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {priceCategory && (
              <HiddenOptionFullDiv>
              <PriceInputDiv>
                <PriceInput placeholder="En Az"/>
                <PriceDivSpan>-</PriceDivSpan>
                <PriceInput placeholder="En Çok"/>
                <PriceIcon />
              </PriceInputDiv>
                {PriceList.map(val =>
                  <CheckBoxFullLabel key={val.id}><RadioInput type="radio" id={val.id} value={val.text} checked={price === val.text} onChange={(e) => {setPrice(e.target.value);console.log(price)}}/>{val.text}</CheckBoxFullLabel>
                )}
              </HiddenOptionFullDiv>
            )}
          </OptionContainer>
          <OptionContainer>
            <StickyOption onClick={() => setStarCategory(!starCategory)}>
              <OptionSpan>Yıldızlı Ürünler</OptionSpan>
              {starCategory ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {starCategory && (
              <HiddenOptionFullDiv>
                {StarProductList.map(val =>
                  <CheckBoxFullLabel key={val.id}><CheckBoxInput type="checkbox" value={val.text}/>{val.text}
                  </CheckBoxFullLabel>
                )}
              </HiddenOptionFullDiv>
            )}
          </OptionContainer>

          <OptionContainer>
            <StickyOption onClick={() => setTrotterCategory(!trotterCategory)}>
              <OptionSpan>Paça Tipi</OptionSpan>
              {trotterCategory ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {trotterCategory && (
              <HiddenFullDiv>
                <SearchBrandInput placeholder="Paça Tipi ara"/>
                {TrotterType.map(val =>
                  <CheckBoxFullLabel key={val.id}><CheckBoxInput type="checkbox" value={val.text}/>{val.text}
                  </CheckBoxFullLabel>
                )}
              </HiddenFullDiv>
            )}
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
                  {val.video && (
                    <VideoContect><VideoIcon/><VideoSpan>Videolu Ürün</VideoSpan></VideoContect>
                  )}
                  {val.coupon && (
                    <CouponContect><CouponIcon/><CouponSpan>Kupon Fırsatı</CouponSpan></CouponContect>
                  )}
                  {val.discount && (
                    <DiscountContect><DiscountIcon/><DiscountSpan>Çok Al Az Öde</DiscountSpan></DiscountContect>
                  )}
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