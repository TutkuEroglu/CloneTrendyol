export const formatPrice = (price) => {
  if (price < 125) {
    return "0 TL - 125 TL"
  }
  if (price < 200) {
    return "125 TL - 200 TL"
  }
  if (price < 350) {
    return "200 TL - 350 TL"
  }
  if ( price < 500) {
    return "350 TL - 500 TL"
  }
  if (price < 1250) {
    return "500 TL - 1250 TL"
  }
  if (price < 15000) {
    return "1250 TL - 15000 TL"
  }
}