import React from 'react';

import { 
  Container, 
  ImageContainer, 
  Model, 
  Price
} from './styles';

import ButtonPrimary from '../Buttons/ButtonPrimary';

const MenuItems = ({model, imageUrl, price, props}) => (
  <Container>
    <Model>{model}</Model>
    <ImageContainer>
      <img src={imageUrl} alt='cars' />
    </ImageContainer>
    <Model small {...props}>{model}</Model>
    <Price>{price}</Price>
    <ButtonPrimary />
  </Container>
);

export default MenuItems;