import React from 'react';

import { 
  Container, 
  Heading, 
  HR, 
  Row 
} from './styles';

import MenuItems from '../MenuItems';
import { data } from '../../mockData/index';


const MenuCars = () => {
  const { carsDataMenu } = data;
  return (
    <Container>
      <Heading>
          ВЫБЕРИТЕ АВТОМОБИЛЬ В РАССРОЧКУ
      </Heading>
      <HR />
      <Row>
        { carsDataMenu.map(({id, ...otherProps}) =>
          (<MenuItems key={id} {...otherProps} />)
        )}
      </Row>
    </Container>
  );
};

export default MenuCars;