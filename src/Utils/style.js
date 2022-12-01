import styled from "styled-components";
import {ReactComponent as fullStar} from "../assets/svg/star-fill.svg";
import {ReactComponent as camera} from "../assets/svg/camera.svg";

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
`;

export const FullStarIcon = styled(fullStar)`
  color: #FFC000;
  padding: 0 4px 0 0;
  box-sizing: border-box;
`;

export const StarIcon = styled(fullStar)`
  color: #D8D8D8;
  padding: 0 0 0 2px;
  box-sizing: border-box;
`;

export const LookNumber = styled.div`
  font-size: 10px;
  color: #999;
  line-height: 14px;
  padding: 0 5px;
  box-sizing: border-box;
`;

export const CameraIcon = styled(camera)`
  color: #343435;
  padding: 0 1px;
  box-sizing: border-box;
`;