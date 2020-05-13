import React from 'react';

import { 
  Container,
  Row,
  Wrapper, 
  Title, 
  LinkStyle,
  SocialFollow, 
  Icons, 
  HrDotted,
  H6
} from './styles';

import IconFacebook from '../../assets/icons/facebook.JPG';
import IconTwitter from '../../assets/icons/twitter.JPG';
import IconGoogle from '../../assets/icons/google.JPG';
import IconUtube from '../../assets/icons/utube.JPG';
import IconInsta from '../../assets/icons/insta.JPG';

const Footer = () => (
  <Container>
    <Row>
      <Wrapper>
        <Title>Автомобили</Title>
          <LinkStyle>Авто GM</LinkStyle>
          <LinkStyle>Авто Hyundai</LinkStyle>
          <LinkStyle>Б/У АВТО</LinkStyle>
      </Wrapper>

      <Wrapper>
        <Title>О нас</Title>
        <LinkStyle>Контакты</LinkStyle>
        <LinkStyle>Карьера</LinkStyle>
      </Wrapper>

      <Wrapper>
        <Title>Следите за нами</Title>
        <SocialFollow>
      <Icons><img src={IconFacebook} alt=""/></Icons>
          <Icons><img src={IconTwitter} alt=""/></Icons>
          <Icons><img src={IconGoogle} alt=""/></Icons>
          <Icons><img src={IconUtube} alt=""/></Icons>
          <Icons><img src={IconInsta} alt=""/></Icons>
        </SocialFollow>
      </Wrapper>

    </Row>
    <HrDotted />
    <H6>© All rights reserved</H6>
  </Container>
);

export default Footer;