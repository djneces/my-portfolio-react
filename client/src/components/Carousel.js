import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './Carousel.scss';

const Carousel = ({ data }) => {
  const handleDragStart = (e) => e.preventDefault();

  const items = () => {
    return data.images.map((image) => {
      return (
        <img src={image.url} onDragStart={handleDragStart} alt='Carousel' />
      );
    });
  };

  return (
    <div className='Carousel'>
      <AliceCarousel
        mouseTracking
        items={items()}
        disableButtonsControls={true}
      />
    </div>
  );
};

export default Carousel;
