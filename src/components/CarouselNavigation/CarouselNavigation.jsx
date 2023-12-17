import React from 'react';
import PropTypes from 'prop-types';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './carouselNavigation.css';
import { Navigation, Autoplay } from 'swiper/modules';

export default function CarouselNavigation({ slide1, slide2, slide3 }) {
  return (
    <>
      <Swiper navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
        loop={true}
        spaceBetween={200}
        slidesPerView={1}
        className="mySwiper"
      >
        <SwiperSlide>{slide1}</SwiperSlide>
        <SwiperSlide>{slide2}</SwiperSlide>
        <SwiperSlide>{slide3}</SwiperSlide>
      </Swiper>
    </>
  );
}

CarouselNavigation.propTypes = {
  slide1: PropTypes.node.isRequired,
  slide2: PropTypes.node.isRequired,
  slide3: PropTypes.node.isRequired,
};