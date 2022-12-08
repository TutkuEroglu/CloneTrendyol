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
  PriceDiv, PriceDivSpan, PriceIcon, PriceInput, PriceInputDiv,
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
  const [price, setPrice] = useState("");
  const [sweatPants, setSweatPants] = useState(false);
  const [trackSuit, setTrackSuit] = useState(false);
  const [isCheckedWoman, setIsCheckedWoman] = useState(true);
  const [isCheckedMan, setIsCheckedMan] = useState(true);
  const [checked, setChecked] = useState(false);
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


  const onChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    trackSuitHandler()
  }, [category]);

  const brandChange = (val) => {
    if (brandListCopy.map(el => el.id === val.id)) {
      setBrandListCopy(brandListCopy.map(el => el.id === val.id ? {...el, brandChecked: !el.brandChecked} : {
        ...el,
        brandChecked: false
      }))
    }
    if (!val.brandChecked) {
      setList(ContainerList.filter((item) => item.BrandType === val.text));
    } else if (val.brandChecked) {
      setList(ContainerList)
    }
  };

  const bodySizeChange = (val) => {
    if (bodySizeList.map(el => el.id === val.id)) {
      setBodySizeList(bodySizeList.map(el => el.id === val.id ? {...el, isChecked: !el.isChecked} : {
        ...el,
        isChecked: false
      }))
    }
    if (!val.isChecked) {
      setList(ContainerList.filter((item) => item.bodySize === val.text));
    } else if (val.isChecked) {
      setList(ContainerList)
    }
  };

  const TrotterTypeHandler = (val) => {
    if (trotterTypeList.map(el => el.id === val.id)) {
      setTrotterTypeList(trotterTypeList.map(el => el.id === val.id ? {...el, isChecked: !el.isChecked} : {
        ...el,
        isChecked: false
      }))
    }
    if (!val.isChecked) {
      setList(ContainerList.filter((item) => item.trotterType === val.text));
    } else if (val.isChecked) {
      setList(ContainerList)
    }
  };

  const patternHandler = (val) => {
    if (patternList.map(el => el.id === val.id)) {
      setPatternList(patternList.map(el => el.id === val.id ? {...el, isChecked: !el.isChecked} : {
        ...el,
        isChecked: false
      }))
    }
    if (!val.isChecked) {
      setList(ContainerList.filter((item) => item.pattern === val.text));
    } else if (val.isChecked) {
      setList(ContainerList)
    }
  };

  const materialHandler = (val) => {
    if (materiel.map(el => el.id === val.id)) {
      setMateriel(materiel.map(el => el.id === val.id ? {...el, isChecked: !el.isChecked} : {
        ...el,
        isChecked: false
      }))
    }
    if (!val.isChecked) {
      setList(ContainerList.filter((item) => item.materiel === val.text));
    } else if (val.isChecked) {
      setList(ContainerList)
    }
  };

  const waistHandler = (val) => {
    if (waist.map(el => el.id === val.id)) {
      setWaist(waist.map(el => el.id === val.id ? {...el, isChecked: !el.isChecked} : {
        ...el,
        isChecked: false
      }))
    }
    if (!val.isChecked) {
      setList(ContainerList.filter((item) => item.waistType === val.text));
    } else if (val.isChecked) {
      setList(ContainerList)
    }
  };

  const usageAreaHandler = (val) => {
    if (usageArea.map(el => el.id === val.id)) {
      setUsageArea(usageArea.map(el => el.id === val.id ? {...el, isChecked: !el.isChecked} : {
        ...el,
        isChecked: false
      }))
    }
    if (!val.isChecked) {
      setList(ContainerList.filter((item) => item.usageAreaType === val.text));
    } else if (val.isChecked) {
      setList(ContainerList)
    }
  };

  const sellerTypeHandler = (val) => {
    if (sellerTypeList.map(el => el.id === val.id)) {
      setSellerTypeList(sellerTypeList.map(el => el.id === val.id ? {...el, isChecked: !el.isChecked} : {
        ...el,
        isChecked: false
      }))
    }
    if (!val.isChecked) {
      setList(ContainerList.filter((item) => item.sellerType === val.text));
    } else if (val.isChecked) {
      setList(ContainerList)
    }
  };

  const productRatingHandler = (val) => {
    if (productRating.map(el => el.id === val.id)) {
      setProductRating(productRating.map(el => el.id === val.id ? {...el, isChecked: !el.isChecked} : {
        ...el,
        isChecked: false
      }))
    }
    if (!val.isChecked) {
      setList(ContainerList.filter((item) => item.productRating === val.text));
    } else if (val.isChecked) {
      setList(ContainerList)
    }
  };

  const starProductHandler = (val) => {
    if (starProduct.map(el => el.id === val.id)) {
      setStarProduct(starProduct.map(el => el.id === val.id ? {...el, isChecked: !el.isChecked} : {
        ...el,
        isChecked: false
      }))
    }
    if (!val.isChecked) {
      setList(ContainerList.filter((item) => item.starProduct === val.text));
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
                  <EmptyDiv onClick={() => brandChange(val)} key={val.id}>
                    <CheckBoxInput type="checkbox" value={val.text} checked={val.brandChecked} onChange={brandChange}/>
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
                  <EmptyDiv onClick={() => bodySizeChange(val)} key={val.id}>
                  <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={bodySizeChange}/>
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
                {ColoursList.map(val =>
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
                  <PriceIcon/>
                </PriceInputDiv>
                {PriceList.map(val =>
                  <CheckBoxFullLabel key={val.id}><RadioInput type="radio" id={val.id} value={val.text}
                                                              checked={price === val.text} onChange={(e) => {
                    setPrice(e.target.value);
                  }}/>{val.text}</CheckBoxFullLabel>
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
                  <EmptyDiv onClick={() => starProductHandler(val)} key={val.id}>
                  <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={starProductHandler}/>
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
                  <EmptyDiv onClick={() => TrotterTypeHandler(val)} key={val.id}>
                  <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={TrotterTypeHandler}/>
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
                  <EmptyDiv onClick={() => patternHandler(val)} key={val.id}>
                  <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={patternHandler}/>
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
                  <EmptyDiv onClick={() => materialHandler(val)} key={val.id}>
                  <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={materialHandler}/>
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
                  <EmptyDiv onClick={() => waistHandler(val)} key={val.id}>
                    <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={waistHandler}/>
                    <CheckBoxFullLabel>{val.text}</CheckBoxFullLabel>
                  </EmptyDiv>
                )}
              </HiddenOptionFullDiv>
            )}
          </OptionContainer>
          <OptionContainer>
            <StickyOptionAlone>
              <CheckBoxInputAlone type="checkbox" value="Kargo Bedava" onChange={handleCheckboxChange}/>
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
                  <EmptyDiv onClick={() => usageAreaHandler(val)} key={val.id}>
                  <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={usageAreaHandler}/>
                  <CheckBoxFullLabel>{val.text}</CheckBoxFullLabel>
                  </EmptyDiv>
                )}
              </HiddenOptionFullDiv>
            )}
          </OptionContainer>
          <OptionContainer>
            <StickyOptionAlone>
              <CheckBoxInputAlone type="checkbox" value="Fotoğraflı Yorumlar"/>
              <OptionSpanAlone>Fotoğraflı Yorumlar</OptionSpanAlone>
            </StickyOptionAlone>
          </OptionContainer>
          <OptionContainer>
            <StickyOptionAlone>
              <CheckBoxInputAlone type="checkbox" value="9 Puan Üzeri Satıcılar"/>
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
                  <EmptyDiv onClick={() => sellerTypeHandler(val)} key={val.id}>
                    <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={sellerTypeHandler}/>
                    <CheckBoxFullLabel>{val.text}</CheckBoxFullLabel>
                  </EmptyDiv>
                )}
              </HiddenOptionFullDiv>
            )}
          </OptionContainer>
          <OptionContainer>
            <StickyOptionAlone>
              <CheckBoxInputAlone type="checkbox" value="Hızlı Teslimat"/>
              <OptionSpanAlone>Hızlı Teslimat</OptionSpanAlone>
            </StickyOptionAlone>
          </OptionContainer>
          <OptionContainer>
            <StickyOptionAlone>
              <CheckBoxInputAlone type="checkbox" value="9 Puan Üzeri Satıcılar"/>
              <OptionSpanAlone>Kuponlu Ürünler</OptionSpanAlone>
            </StickyOptionAlone>
          </OptionContainer>
          <OptionContainer>
            <StickyOptionAlone>
              <CheckBoxInputAlone type="checkbox" value="9 Puan Üzeri Satıcılar" defaultChecked/>
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
                  <EmptyDiv onClick={() => productRatingHandler(val)} key={val.id}>
                  <CheckBoxInput type="checkbox" value={val.text} checked={val.isChecked} onChange={productRatingHandler}/>
                  <CheckBoxFullLabel>{val.text}</CheckBoxFullLabel>
                  </EmptyDiv>
                )}
              </HiddenOptionFullDiv>
            )}
          </OptionContainer>
          <OptionContainer>
            <StickyOptionAlone onClick={() => setChecked(!checked)}>
              <CheckBoxInputAlone type="checkbox" value={"selam"} checked={checked} onChange={onChange}/>
              <OptionSpanAlone>Videolu Ürün</OptionSpanAlone>
            </StickyOptionAlone>
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