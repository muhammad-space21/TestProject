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
          <Icons></Icons>
          <Icons></Icons>
          <Icons></Icons>
          <Icons></Icons>
          <Icons></Icons>
        </SocialFollow>
      </Wrapper>

    </Row>
    <HrDotted />
    <H6>© All rights reserved</H6>
  </Container>
);

export default Footer;