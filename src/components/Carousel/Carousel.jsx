import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './carousel.css';
import PropTypes from 'prop-types';


import { Pagination, Autoplay} from 'swiper/modules';

export default function Carousel({slide1, slide2, slide3}) {
  return (
    <>
      <Swiper
        pagination={{clickable: true,}}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        spaceBetween={50}
        slidesPerView={1}
        loop = {true}
        className="mySwiper"
      >
        <SwiperSlide>{slide1}</SwiperSlide>
        <SwiperSlide>{slide2}</SwiperSlide>
        <SwiperSlide>{slide3}</SwiperSlide>
      </Swiper>
    </>
  );
}

Carousel.propTypes = {
  slide1: PropTypes.node.isRequired,
  slide2: PropTypes.node.isRequired,
  slide3: PropTypes.node.isRequired,
};
