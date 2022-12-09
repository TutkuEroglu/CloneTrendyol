import React, {useEffect, useState} from 'react'
import "./style.js"
import {
  BodyContainer,
  CampaignDiv,
  CardContainer,
  CardImage,
  Cards,
  CategoryContainer, CheckBoxDoubleInput, CheckBoxFullLabel, CheckBoxInput, CheckBoxInputAlone,
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
  DiscountSpan, EmptyDiv,
  FastDelivery, HiddenFullDiv,
  HiddenOptionDiv, HiddenOptionFullDiv,
  HiddenOptionSpan,
  ImageContainer,
  Images,
  ImportantSpan,
  Info,
  OptionContainer,
  OptionDownIcon,
  OptionSpan, OptionSpanAlone,
  OptionUpIcon,
  PriceDiv, PriceDivSpan, PriceIcon, PriceInput, PriceInputDiv, PriceLabel,
  PriceSpan,
  ProductDown, RadioInput, SearchBrandInput,
  SearchHeader,
  SelectedOptionBack,
  SelectedOptionSpan,
  StickyLeftContainer,
  StickyOption, StickyOptionAlone,
  TruckIcon,
  VideoContect,
  VideoIcon,
  VideoSpan
} from './style.js'
import ContainerList from "./ContainerList";
import {formatStar} from "../Utils/starFormatter";
import {
  BodySizeList,
  BrandList,
  ColoursList, GenderList,
  MaterielList,
  PatternList,
  PriceList, ProductRatingList, SellerTypeList,
  StarProductList,
  TrotterTypeList, UsageAreaList, WaistList
} from "../ArrayList/List";
import {formatPrice} from "../Utils/formatPrice";

const Container = () => {
  const [list, setList] = useState(ContainerList);
  const [brandListCopy, setBrandListCopy] = useState(BrandList)
  const [gender, setGender] = useState(GenderList);
  const [bodySizeList, setBodySizeList] = useState(BodySizeList);
  const [trotterTypeList, setTrotterTypeList] = useState(TrotterTypeList);
  const [patternList, setPatternList] = useState(PatternList);
  const [materiel, setMateriel] = useState(MaterielList);
  const [waist, setWaist] = useState(WaistList);
  const [usageArea, setUsageArea] = useState(UsageAreaList);
  const [sellerTypeList, setSellerTypeList] = useState(SellerTypeList);
  const [productRating, setProductRating] = useState(ProductRatingList);
  const [starProduct, setStarProduct] = useState(StarProductList);
  const [priceList, setPriceList] = useState(PriceList);
  const [colourList, setColourList] = useState(ColoursList);
  const [sweatPants, setSweatPants] = useState(false);
  const [trackSuit, setTrackSuit] = useState(false);
  const [togetherBuyWin, setTogetherBuyWin] = useState(false);
  const [couponProduct, setCouponProduct] = useState(false);
  const [fastDelivery, setFastDelivery] = useState(false);
  const [ninePoint, setNinePoint] = useState(false);
  const [isCheckedWoman, setIsCheckedWoman] = useState(true);
  const [isCheckedMan, setIsCheckedMan] = useState(true);
  const [videoProduct, setVideoProduct] = useState(false);
  const [picComment, setPicComment] = useState(false);
  const [freeCargo, setFreeCargo] = useState(false);
  const [category, setCategory] = useState(false);
  const [priceCategory, setPriceCategory] = useState(false);
  const [starCategory, setStarCategory] = useState(false);
  const [brandCategory, setBrandCategory] = useState(false);
  const [bodySizeCategory, setBodySizeCategory] = useState(false);
  const [trotterCategory, setTrotterCategory] = useState(false);
  const [colorCategory, setColorCategory] = useState(false);
  const [genderCategory, setGenderCategory] = useState(false);
  const [patternCategory, setPatternCategory] = useState(false);
  const [materielCategory, setMaterielCategory] = useState(false);
  const [waistCategory, setWaistCategory] = useState(false);
  const [usageAreaCategory, setUsageAreaCategory] = useState(false);
  const [sellerTypeCategory, setSellerTypeCategory] = useState(false);
  const [productRatingCategory, setProductRatingCategory] = useState(false);

   const SingleFormatter = (setClass, getClass, IdNumber) => {
    if (!getClass) {
      setClass(true)
      if (IdNumber === 1) setList(ContainerList.filter((item) => item.freeCargo === true))
      else if (IdNumber === 2) setList(ContainerList.filter((item) => item.pictureComment === true))
      else if (IdNumber === 3) setList(ContainerList.filter((item) => item.ninePoint === true))
      else if (IdNumber === 4) setList(ContainerList.filter((item) => item.fastDelivery === true))
      else if (IdNumber === 5) setList(ContainerList.filter((item) => item.coupon === true))
      else if (IdNumber === 6) setList(ContainerList.filter((item) => item.buyWin === true))
      else if (IdNumber === 7) setList(ContainerList.filter((item) => item.video === true))
    } else {
      setClass(false)
      setList(ContainerList)
    }
  };

  useEffect(() => {
    trackSuitHandler()
  }, [category]);

  const formatHandler = (val, setClass, getClass, IdNumber) => {
    if (getClass.map(el => el.id === val.id)) {
      setClass(getClass.map(el => el.id === val.id ? {...el, isChecked: !el.isChecked} : {
        ...el,
        isChecked: false
      }))
    }
    if (!val.isChecked) {
      if (IdNumber === 1) setList(ContainerList.filter((item) => item.BrandType === val.text))
      else if (IdNumber === 2) setList(ContainerList.filter((item) => item.bodySize === val.text))
      else if (IdNumber === 3) setList(ContainerList.filter((item) => item.color === val.text))
      else if (IdNumber === 4) setList(ContainerList.filter((item) => formatPrice(item.price) === val.text))
      else if (IdNumber === 5) setList(ContainerList.filter((item) => item.starProduct === val.text))
      else if (IdNumber === 6) setList(ContainerList.filter((item) => item.trotterType === val.text))
      else if (IdNumber === 7) setList(ContainerList.filter((item) => item.pattern === val.text))
      else if (IdNumber === 8) setList(ContainerList.filter((item) => item.materiel === val.text))
      else if (IdNumber === 9) setList(ContainerList.filter((item) => item.waistType === val.text))
      else if (IdNumber === 10) setList(ContainerList.filter((item) => item.usageAreaType === val.text))
      else if (IdNumber === 11) setList(ContainerList.filter((item) => item.sellerType === val.text))
      else if (IdNumber === 12) setList(ContainerList.filter((item) => item.productRating === val.text))
    } else if (val.isChecked) {
      setList(ContainerList)
    }
  };

  const trackSuitHandler = () => {
    if (sweatPants && !isCheckedMan && !isCheckedWoman) setList(list.filter((item) => item.type === "SweatPants"));
    else if (sweatPants && isCheckedMan && isCheckedWoman) setList(list.filter((item) => item.type === "SweatPants"));
    else if (sweatPants && isCheckedMan && !isCheckedWoman) setList(list.filter((item) => item.type === "SweatPants" && item.category === "man"));
    else if (sweatPants && !isCheckedMan && isCheckedWoman) setList(list.filter((item) => item.type === "SweatPants" && item.category === "woman"));
    else if (trackSuit && !isCheckedMan && !isCheckedWoman) setList(list.filter((item) => item.type === "TrackSuit"));
    else if (trackSuit && isCheckedMan && isCheckedWoman) setList(list.filter((item) => item.type === "TrackSuit"));
    else if (trackSuit && isCheckedMan && !isCheckedWoman) setList(list.filter((item) => item.type === "TrackSuit" && item.category === "man"));
    else if (trackSuit && !isCheckedMan && isCheckedWoman) setList(list.filter((item) => item.type === "TrackSuit" && item.category === "woman"));
    else if (!sweatPants && !trackSuit && !isCheckedMan && !isCheckedWoman) setList(ContainerList)
    else if (!sweatPants && !trackSuit && isCheckedMan && isCheckedWoman) setList(ContainerList)
    else if (!sweatPants && !trackSuit && isCheckedMan && !isCheckedWoman) setList(ContainerList.filter((item) => item.category === "man"));
    else if (!sweatPants && !trackSuit && !isCheckedMan && isCheckedWoman) setList(ContainerList.filter((item) => item.category === "woman"));
  };

  const handleCheckboxChange = val => {
    if (val.text === "Erkek") {
      setGender(gender.map(el => el.id === val.id ? {...el, isChecked: !el.isChecked} : {...el}))
      setIsCheckedMan(!isCheckedMan);
      if ((!isCheckedMan && isCheckedWoman) || (isCheckedMan && !isCheckedWoman)) setList(ContainerList)
      else if (!isCheckedMan && !isCheckedWoman) setList(list.filter((item) => item.category === "Erkek"));
      else if (isCheckedMan && isCheckedWoman) setList(list.filter((item) => item.category === "Kadın"));
    }
    if (val.text === "Kadın") {
      setGender(gender.map(el => el.id === val.id ? {...el, isChecked: !el.isChecked} : {...el}))
      setIsCheckedWoman(!isCheckedWoman);
      if ((!isCheckedWoman && isCheckedMan) || (isCheckedWoman && !isCheckedMan)) setList(ContainerList)
      else if (!isCheckedWoman && !isCheckedMan) setList(list.filter((item) => item.category === "Kadın"));
      else if (isCheckedWoman && isCheckedMan) setList(list.filter((item) => item.category === "Erkek"));
    }
  };

  return (
    <BodyContainer>
      <CategoryContainer>
        <StickyLeftContainer>
          <OptionContainer>
            <StickyOption onClick={sweatPants || trackSuit ? null : () => setCategory(!category)}>
              <OptionSpan>İlgili Kategoriler</OptionSpan>
              {category ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {category && (
              <HiddenOptionDiv>
                <HiddenOptionSpan onClick={() => {
                  setSweatPants(true);
                  setCategory(false);
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
            <StickyOption onClick={() => setGenderCategory(!genderCategory)}>
              <OptionSpan>Cinsiyet</OptionSpan>
              {genderCategory ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {genderCategory && (
              <HiddenOptionDiv>
                {gender.map(val =>
                  <EmptyDiv onClick={() => handleCheckboxChange(val)} key={val.id}>
                    <CheckBoxDoubleInput type="checkbox" value={val.text}
                                         checked={val.text === "Erkek" ? isCheckedMan : isCheckedWoman}
                                         onChange={handleCheckboxChange}/>
                    <CheckBoxLabel>{val.text}</CheckBoxLabel>
                  </EmptyDiv>
                )}
              </HiddenOptionDiv>
            )}
          </OptionContainer>
          <OptionContainer>
            <StickyOption onClick={() => setBrandCategory(!brandCategory)}>
              <OptionSpan>Marka</OptionSpan>
              {brandCategory ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {brandCategory && (
              <HiddenOptionFullDiv>
                <SearchBrandInput placeholder="Marka ara"/>
                {brandListCopy.map(val =>
                  <EmptyDiv onClick={() => formatHandler(val, setBrandListCopy, brandListCopy, 1)} key={val.id}>
                    <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={formatHandler}/>
                    <CheckBoxFullLabel>{val.text}</CheckBoxFullLabel>
                  </EmptyDiv>
                )}
              </HiddenOptionFullDiv>
            )}
          </OptionContainer>
          <OptionContainer>
            <StickyOption onClick={() => setBodySizeCategory(!bodySizeCategory)}>
              <OptionSpan>Beden</OptionSpan>
              {bodySizeCategory ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {bodySizeCategory && (
              <HiddenOptionFullDiv>
                <SearchBrandInput placeholder="Beden ara"/>
                {bodySizeList.map(val =>
                  <EmptyDiv onClick={() => formatHandler(val, setBodySizeList, bodySizeList, 2)} key={val.id}>
                    <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={formatHandler}/>
                    <CheckBoxFullLabel>{val.text}</CheckBoxFullLabel>
                  </EmptyDiv>
                )}
              </HiddenOptionFullDiv>
            )}
          </OptionContainer>
          <OptionContainer>
            <StickyOption onClick={() => setColorCategory(!colorCategory)}>
              <OptionSpan>Renk</OptionSpan>
              {colorCategory ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {colorCategory && (
              <ColorDiv>
                {colourList.map(val =>
                  <ColorDivBg key={val.id}>
                    <CircularColor colour={val.text}
                                   onClick={() => formatHandler(val, setColourList, colourList, 3)}></CircularColor>
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
                  <PriceIcon/>
                </PriceInputDiv>
                {priceList.map(val =>
                  <PriceLabel key={val.id}><RadioInput type="radio" id={val.id} value={val.text} checked={val.isChecked}
                                                       onChange={(e) => formatHandler(val, setPriceList, priceList, 4, e.target.value)}/>{val.text}
                  </PriceLabel>
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
                {starProduct.map(val =>
                  <EmptyDiv onClick={() => formatHandler(val, setStarProduct, starProduct, 5)} key={val.id}>
                    <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={formatHandler}/>
                    <CheckBoxFullLabel>{val.text}</CheckBoxFullLabel>
                  </EmptyDiv>
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
                {trotterTypeList.map(val =>
                  <EmptyDiv onClick={() => formatHandler(val, setTrotterTypeList, trotterTypeList, 6)} key={val.id}>
                    <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={formatHandler}/>
                    <CheckBoxFullLabel>{val.text}</CheckBoxFullLabel>
                  </EmptyDiv>
                )}
              </HiddenFullDiv>
            )}
          </OptionContainer>
          <OptionContainer>
            <StickyOption onClick={() => setPatternCategory(!patternCategory)}>
              <OptionSpan>Kalıp</OptionSpan>
              {patternCategory ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {patternCategory && (
              <HiddenOptionFullDiv>
                <SearchBrandInput placeholder="Kalıp ara"/>
                {patternList.map(val =>
                  <EmptyDiv onClick={() => formatHandler(val, setPatternList, patternList, 7)} key={val.id}>
                    <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={formatHandler}/>
                    <CheckBoxFullLabel>{val.text}</CheckBoxFullLabel>
                  </EmptyDiv>
                )}
              </HiddenOptionFullDiv>
            )}
          </OptionContainer>
          <OptionContainer>
            <StickyOption onClick={() => setMaterielCategory(!materielCategory)}>
              <OptionSpan>Materyal</OptionSpan>
              {materielCategory ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {materielCategory && (
              <HiddenOptionFullDiv>
                <SearchBrandInput placeholder="Materyal ara"/>
                {materiel.map(val =>
                  <EmptyDiv onClick={() => formatHandler(val, setMateriel, materiel, 8)} key={val.id}>
                    <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={formatHandler}/>
                    <CheckBoxFullLabel>{val.text}</CheckBoxFullLabel>
                  </EmptyDiv>
                )}
              </HiddenOptionFullDiv>
            )}
          </OptionContainer>
          <OptionContainer>
            <StickyOption onClick={() => setWaistCategory(!waistCategory)}>
              <OptionSpan>Bel</OptionSpan>
              {waistCategory ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {waistCategory && (
              <HiddenOptionFullDiv>
                {waist.map(val =>
                  <EmptyDiv onClick={() => formatHandler(val, setWaist, waist, 9)} key={val.id}>
                    <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={formatHandler}/>
                    <CheckBoxFullLabel>{val.text}</CheckBoxFullLabel>
                  </EmptyDiv>
                )}
              </HiddenOptionFullDiv>
            )}
          </OptionContainer>
          <OptionContainer onClick={() => SingleFormatter(setFreeCargo, freeCargo, 1)}>
            <StickyOptionAlone>
              <CheckBoxInputAlone type="checkbox" value="Kargo Bedava" checked={freeCargo} onChange={SingleFormatter}/>
              <OptionSpanAlone>Kargo Bedava</OptionSpanAlone>
            </StickyOptionAlone>
          </OptionContainer>
          <OptionContainer>
            <StickyOption onClick={() => setUsageAreaCategory(!usageAreaCategory)}>
              <OptionSpan>Kullanım Alanı</OptionSpan>
              {usageAreaCategory ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {usageAreaCategory && (
              <HiddenOptionFullDiv>
                {usageArea.map(val =>
                  <EmptyDiv onClick={() => formatHandler(val, setUsageArea, usageArea, 10)} key={val.id}>
                    <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={formatHandler}/>
                    <CheckBoxFullLabel>{val.text}</CheckBoxFullLabel>
                  </EmptyDiv>
                )}
              </HiddenOptionFullDiv>
            )}
          </OptionContainer>
          <OptionContainer onClick={() => SingleFormatter(setPicComment, picComment, 2)}>
            <StickyOptionAlone>
              <CheckBoxInputAlone type="checkbox" value="Fotoğraflı Yorumlar" checked={picComment}
                                  onChange={SingleFormatter}/>
              <OptionSpanAlone>Fotoğraflı Yorumlar</OptionSpanAlone>
            </StickyOptionAlone>
          </OptionContainer>
          <OptionContainer onClick={() => SingleFormatter(setNinePoint, ninePoint, 3)}>
            <StickyOptionAlone>
              <CheckBoxInputAlone type="checkbox" value="9 Puan Üzeri Satıcılar" checked={ninePoint}
                                  onChange={SingleFormatter}/>
              <OptionSpanAlone>9 Puan Üzeri Satıcılar</OptionSpanAlone>
            </StickyOptionAlone>
          </OptionContainer>
          <OptionContainer>
            <StickyOption onClick={() => setSellerTypeCategory(!sellerTypeCategory)}>
              <OptionSpan>Satıcı Tipi</OptionSpan>
              {sellerTypeCategory ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {sellerTypeCategory && (
              <HiddenOptionFullDiv>
                {sellerTypeList.map(val =>
                  <EmptyDiv onClick={() => formatHandler(val, setSellerTypeList, sellerTypeList, 11)} key={val.id}>
                    <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={formatHandler}/>
                    <CheckBoxFullLabel>{val.text}</CheckBoxFullLabel>
                  </EmptyDiv>
                )}
              </HiddenOptionFullDiv>
            )}
          </OptionContainer>
          <OptionContainer onClick={() => SingleFormatter(setFastDelivery, fastDelivery, 4)}>
            <StickyOptionAlone>
              <CheckBoxInputAlone type="checkbox" value="Hızlı Teslimat" checked={fastDelivery}
                                  onChange={SingleFormatter}/>
              <OptionSpanAlone>Hızlı Teslimat</OptionSpanAlone>
            </StickyOptionAlone>
          </OptionContainer>
          <OptionContainer onClick={() => SingleFormatter(setCouponProduct, couponProduct, 5)}>
            <StickyOptionAlone>
              <CheckBoxInputAlone type="checkbox" value="Kuponlu Ürünler" checked={couponProduct}
                                  onChange={SingleFormatter}/>
              <OptionSpanAlone>Kuponlu Ürünler</OptionSpanAlone>
            </StickyOptionAlone>
          </OptionContainer>
          <OptionContainer onClick={() => SingleFormatter(setTogetherBuyWin, togetherBuyWin, 6)}>
            <StickyOptionAlone>
              <CheckBoxInputAlone type="checkbox" value="Birlikte Al Kazan" checked={togetherBuyWin}
                                  onChange={SingleFormatter}/>
              <OptionSpanAlone>Birlikte Al Kazan</OptionSpanAlone>
            </StickyOptionAlone>
          </OptionContainer>
          <OptionContainer>
            <StickyOption onClick={() => setProductRatingCategory(!productRatingCategory)}>
              <OptionSpan>Ürün Değerlendirmesi</OptionSpan>
              {productRatingCategory ? <OptionUpIcon/> : <OptionDownIcon/>}
            </StickyOption>
            {productRatingCategory && (
              <HiddenOptionFullDiv>
                {productRating.map(val =>
                  <EmptyDiv onClick={() => formatHandler(val, setProductRating, productRating, 12)} key={val.id}>
                    <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={formatHandler}/>
                    <CheckBoxFullLabel>{val.text}</CheckBoxFullLabel>
                  </EmptyDiv>
                )}
              </HiddenOptionFullDiv>
            )}
          </OptionContainer>
          <OptionContainer>
            <StickyOptionAlone onClick={() => SingleFormatter(setVideoProduct, videoProduct, 7)}>
              <CheckBoxInputAlone type="checkbox" value={"Videolu Ürün"} checked={videoProduct}
                                  onChange={SingleFormatter}/>
              <OptionSpanAlone>Videolu Ürün</OptionSpanAlone>
            </StickyOptionAlone>
          </OptionContainer>
        </StickyLeftContainer>
      </CategoryContainer>
      <CardContainer>
        <SearchHeader>"Eşofman" araması için {list.length} sonuç listeleniyor</SearchHeader>
        <FastDelivery>
          <Info>
            <TruckIcon/>
            <DeliverySpan>Hızlı Teslimat</DeliverySpan>
            yapılan ürünleri göster.
          </Info>
          <DeliveryButton>Uygula</DeliveryButton>
        </FastDelivery>
        <ContainerInfo>
          {list.map(val =>
            <Cards key={val.id}>
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