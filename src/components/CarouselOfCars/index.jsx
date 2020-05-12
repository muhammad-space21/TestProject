import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import {Item1} from './styles';

// import Img1 from '../../assets/images/1-2.jpg';
// import Img2 from '../../assets/images/1-3.jpg';
// import Img3 from '../../assets/images/1-4.jpg';

class CarouselOfCars extends Component {
  state = {
    items: [
      {id: 1, image: Item1},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'}
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <Carousel itemsToScroll={5} itemsToShow={5}>
        {items.map(item => <div key={item.id}>{item.image}</div>)}
      </Carousel>
    )
  }
};

export default CarouselOfCars;