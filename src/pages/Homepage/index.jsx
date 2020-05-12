import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import MenuCars from '../../components/MenuCars';
import BrandIcons from '../../components/BrandIcons';
// import CarouselOfCars from '../../components/CarouselOfCars';
import SalesInstruction from '../../components/SalesInstruction';
import Footer from '../../containers/Footer';

const Homepage = () => (
  <Container>
    <Header />
    <MenuCars />
    <BrandIcons />
    {/* <CarouselOfCars /> */}
    <SalesInstruction />
    <Footer />
  </Container>
);

export default Homepage;