import React from 'react';
import PropTypes from 'prop-types';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './carouselLoja.css';
import { Autoplay, Navigation } from 'swiper/modules';

export default function CarouselLoja({ slide1, slide2, slide3 }) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        spaceBetween={30}
        loop={true}
      >
        <SwiperSlide>{slide1} </SwiperSlide>
        <SwiperSlide>{slide2} </SwiperSlide>
        <SwiperSlide>{slide3} </SwiperSlide>
      </Swiper>
    </>
  );
}

CarouselLoja.propTypes = {
  slide1: PropTypes.node.isRequired,
  slide2: PropTypes.node.isRequired,
  slide3: PropTypes.node.isRequired,
};