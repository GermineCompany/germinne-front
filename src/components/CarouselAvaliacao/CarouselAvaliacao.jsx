import React from 'react';
import PropTypes from 'prop-types';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules';

export default function CarouselAvaliacao({ slide1, slide2, slide3, slide4 }) {
  return (
    <>
      <Swiper navigation={true}
        modules={[Navigation]}
        loop={true}
        spaceBetween={0}
        slidesPerView={3}
        className="mySwiper"
      >
        <SwiperSlide>{slide1}</SwiperSlide>
        <SwiperSlide>{slide2}</SwiperSlide>
        <SwiperSlide>{slide3}</SwiperSlide>
        <SwiperSlide>{slide4}</SwiperSlide>
      </Swiper>
    </>
  );
}

CarouselAvaliacao.propTypes = {
  slide1: PropTypes.node.isRequired,
  slide2: PropTypes.node.isRequired,
  slide3: PropTypes.node.isRequired,
  slide4: PropTypes.node.isRequired,
};