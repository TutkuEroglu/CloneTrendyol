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
  FastDelivery, FastDeliveryDiv, FreeDeliveryDiv,
  HiddenOptionDiv, HiddenOptionFullDiv,
  HiddenOptionSpan,
  ImageContainer, ImageOverlayHeader,
  Images,
  ImportantSpan,
  Info, LikeButton, LikeButtonDiv,
  OptionContainer,
  OptionDownIcon,
  OptionSpan, OptionSpanAlone,
  OptionUpIcon,
  PriceDiv, PriceDivSpan, PriceIcon, PriceInput, PriceInputDiv, PriceLabel,
  PriceSpan,
  ProductDown, RadioInput, SearchBrandInput,
  SearchHeader,
  SelectedOptionBack,
  SelectedOptionSpan, StarProductImg,
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
  const [brand, setBrand] = useState("")
  const [bodySize, setBodySize] = useState("")
  const [trotterType, setTrotterType] = useState("");
  const [pattern, setPattern] = useState("");
  const [materiel, setMateriel] = useState("");
  const [list, setList] = useState(ContainerList);
  const [brandListCopy, setBrandListCopy] = useState(BrandList)
  const [gender, setGender] = useState(GenderList);
  const [bodySizeList, setBodySizeList] = useState(BodySizeList);
  const [trotterTypeList, setTrotterTypeList] = useState(TrotterTypeList);
  const [patternList, setPatternList] = useState(PatternList);
  const [materielList, setMaterielList] = useState(MaterielList);
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
  const [brandCategory, setBrandCategory] = useState(true);
  const [bodySizeCategory, setBodySizeCategory] = useState(false);
  const [trotterCategory, setTrotterCategory] = useState(false);
  const [colorCategory, setColorCategory] = useState(false);
  const [genderCategory, setGenderCategory] = useState(true);
  const [patternCategory, setPatternCategory] = useState(false);
  const [materielCategory, setMaterielCategory] = useState(false);
  const [waistCategory, setWaistCategory] = useState(false);
  const [usageAreaCategory, setUsageAreaCategory] = useState(false);
  const [sellerTypeCategory, setSellerTypeCategory] = useState(false);
  const [productRatingCategory, setProductRatingCategory] = useState(false);

  const formatInputDiv = (setCategory, getCategory, SpanText, setClassList, getClassList, setClass, getClass, RealList, IdNumber) => {
    return (
      <OptionContainer>
        <StickyOption onClick={() => setCategory(!getCategory)}>
          <OptionSpan>{SpanText}</OptionSpan>
          {getCategory ? <OptionUpIcon/> : <OptionDownIcon/>}
        </StickyOption>
        {getCategory && (
          <HiddenOptionFullDiv>
            <SearchBrandInput type="search" placeholder={`${SpanText} ara`}
                              onChange={(e) => inputChange(e, setClassList, getClassList, setClass, getClass, RealList)}/>
            {getClassList.map(val =>
              <EmptyDiv onClick={() => formatHandler(val, setClassList, getClassList, IdNumber)} key={val.id}>
                <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={formatHandler}/>
                <CheckBoxFullLabel>{val.text}</CheckBoxFullLabel>
              </EmptyDiv>
            )}
          </HiddenOptionFullDiv>
        )}
      </OptionContainer>
    )
  }

  const formatSingleDiv = (setClass, getClass, IdNumber, valueText, checkText) => {
    return (
      <OptionContainer onClick={() => SingleFormatter(setClass, getClass, IdNumber)}>
        <StickyOptionAlone>
          <CheckBoxInputAlone type="checkbox" value={valueText} checked={checkText} onChange={SingleFormatter}/>
          <OptionSpanAlone>{valueText}</OptionSpanAlone>
        </StickyOptionAlone>
      </OptionContainer>
    )
  }

  const inputChange = (e, setClassList, getClassList, setClass, getClass, DoneList) => {
    setClass(e.target.value)
    if ((e.target.value || getClass === "") || (e.target.value || getClass === " ")) setClassList(DoneList)
    else setClassList(getClassList.filter(el => el.text.toLowerCase().includes(e.target.value.toLowerCase())))
  }

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
          {formatInputDiv(setBrandCategory, brandCategory, "Marka", setBrandListCopy, brandListCopy, setBrand, brand, BrandList, 1)}
          {formatInputDiv(setBodySizeCategory, bodySizeCategory, "Beden", setBodySizeList, bodySizeList, setBodySize, bodySize, BodySizeList, 2)}
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
          {formatInputDiv(setTrotterCategory, trotterCategory, "Paça Tipi", setTrotterTypeList, trotterTypeList, setTrotterType, trotterType, TrotterTypeList, 6)}
          {formatInputDiv(setPatternCategory, patternCategory, "Kalıp", setPatternList, patternList, setPattern, pattern, PatternList, 7)}
          {formatInputDiv(setMaterielCategory, materielCategory, "Materyal", setMaterielList, materielList, setMateriel, materiel, MaterielList, 8)}
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
          {formatSingleDiv(setFreeCargo, freeCargo, 1, "Kargo Bedava", freeCargo)}
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
          {formatSingleDiv(setPicComment, picComment, 2, "Fotoğraflı Yorumlar", picComment)}
          {formatSingleDiv(setNinePoint, ninePoint, 3, "9 Puan Üzeri Satıcılar", ninePoint)}
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
          {formatSingleDiv(setFastDelivery, fastDelivery, 4, "Hızlı Teslimat", fastDelivery)}
          {formatSingleDiv(setCouponProduct, couponProduct, 5, "Kuponlu Ürünler", couponProduct)}
          {formatSingleDiv(setTogetherBuyWin, togetherBuyWin, 6, "Birlikte Al Kazan", togetherBuyWin)}
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
          {formatSingleDiv(setVideoProduct, videoProduct, 7, "Videolu Ürün", videoProduct)}
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
              <ImageContainer>
                <CardImage>
                  <LikeButtonDiv>
                    <LikeButton></LikeButton>
                  </LikeButtonDiv>
                  <ImageOverlayHeader>
                    <EmptyDiv>
                      {val.fastDelivery && <FastDeliveryDiv>HIZLI TESLİMAT</FastDeliveryDiv>}
                      {val.freeCargo && <FreeDeliveryDiv>KARGO BEDAVA</FreeDeliveryDiv>}
                      {val.starProduct === "Bir Yıldızlı Ürün" && <StarProductImg
                        src="https://cdn.dsmcdn.com/indexing-sticker-stamp/moon/aa7816f3-395f-43b0-a9fc-0b806f923a6a.png"/>}
                      {val.starProduct === "İki Yıldızlı Ürün" && <StarProductImg
                        src="https://cdn.dsmcdn.com/indexing-sticker-stamp/moon/e68c3d96-a877-4e49-923b-ca420419ab40.png"/>}
                      {val.starProduct === "Üç Yıldızlı Ürün" && <StarProductImg
                        src="https://cdn.dsmcdn.com/indexing-sticker-stamp/moon/440b9fcb-2da5-421b-8466-4fb7f0c9a080.png"/>}
                    </EmptyDiv>
                  </ImageOverlayHeader>
                  <Images src={val.src}/>
                </CardImage>
              </ImageContainer>
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