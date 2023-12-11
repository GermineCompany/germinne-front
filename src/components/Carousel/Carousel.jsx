import React from 'react';
import PropTypes from 'prop-types';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import './carousel.css';

export default function Carousel({slide1, slide2, slide3}) {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>{slide1} </SwiperSlide>
        <SwiperSlide>{slide2} </SwiperSlide>
        <SwiperSlide>{slide3} </SwiperSlide>
      </Swiper>
    </>
  );
}

Carousel.propTypes = {
  slide1: PropTypes.node.isRequired,
  slide2: PropTypes.node.isRequired,
  slide3: PropTypes.node.isRequired,
};