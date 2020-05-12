import styled from 'styled-components';

import ImageHeader from '../../assets/images/header-img.65.png';

export const Container = styled.div`
  width: 100vw;
  height: 110vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${ImageHeader});
  background-size: cover;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 1100px) {
    background-position: center;
  }
`;

export const Heading = styled.div`
  width: 70%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 83px;
  line-height: 90px;
  font-weight: 400;
  color: white;
  font-family: 'Roboto' sans-serif;
  margin-top: -50px;
    h2 {
      font-size: 35px;
      font-weight: 300;
      line-height: 28px;
      color: white;
      font-family: 'Montserrat' sans-serif;
      margin-top: 20px;
    }
    @media screen and (max-width: 991px) {
      font-size: 70px;
      line-height: 90px;
      text-align: center;
    }
    @media screen and (max-width: 768px) {
      width: 80%;
      font-size: 40px;
      line-height: 50px;
      text-align: center;
    }
`;
