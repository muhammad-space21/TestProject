import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import MenuCars from '../../components/MenuCars';
import BrandIcons from '../../components/BrandIcons';

const Homepage = () => (
  <Container>
    <Header />
    <MenuCars />
    <BrandIcons />
  </Container>
);

export default Homepage;