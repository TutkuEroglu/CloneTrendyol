import "./style.js"
import {CameraIcon, FullStarIcon, LookNumber, StarContainer, StarIcon} from "./style";

export const formatStar = (starNumber, lookNumber) => {

  if (starNumber === 1) {
    return (
      <StarContainer>
        <FullStarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <LookNumber>({lookNumber})</LookNumber>
        <CameraIcon />
      </StarContainer>
    )
  }

  if (starNumber === 2) {
    return (
      <StarContainer>
        <FullStarIcon />
        <FullStarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <LookNumber>({lookNumber})</LookNumber>
        <CameraIcon />
      </StarContainer>
    )
  }

  if (starNumber === 3) {
    return (
      <StarContainer>
        <FullStarIcon />
        <FullStarIcon />
        <FullStarIcon />
        <StarIcon />
        <StarIcon />
        <LookNumber>({lookNumber})</LookNumber>
        <CameraIcon />
      </StarContainer>
    )
  }

  if (starNumber === 4) {
    return (
      <StarContainer>
        <FullStarIcon />
        <FullStarIcon />
        <FullStarIcon />
        <FullStarIcon />
        <StarIcon />
        <LookNumber>({lookNumber})</LookNumber>
        <CameraIcon />
      </StarContainer>
    )
  }

  if (starNumber === 5) {
    return (
      <StarContainer>
        <FullStarIcon />
        <FullStarIcon />
        <FullStarIcon />
        <FullStarIcon />
        <FullStarIcon />
        <LookNumber>({lookNumber})</LookNumber>
        <CameraIcon />
      </StarContainer>
    )
  }

  else {
    return (
    <StarContainer>
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <LookNumber>({lookNumber})</LookNumber>
      <CameraIcon />
    </StarContainer>
    )
  }
};