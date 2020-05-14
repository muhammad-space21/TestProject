import styled from 'styled-components';
import Slider from "react-slick";

export const Container = styled.div`
  width: 30%;
  height: 250px;
  padding-left: 10px;
  padding-right: 10px;
    &:focus {
      outline: none;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  &:hover {
    cursor: grab;
    transition: 2s;
  }
`;

export const SliderStyled = styled(Slider)`
  width: 90vw;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 200px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 100px;
`;