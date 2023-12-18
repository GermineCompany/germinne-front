import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './carouselView.css';
import PropTypes from 'prop-types';

import 'swiper/css/navigation';

export default function CarouselView({componente1, componente2, componente3, componente4, componente5, componente6}) {
  return (
    <>
      <Swiper
        slidesPerView={'1'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>{componente1}</SwiperSlide>
        <SwiperSlide>{componente2}</SwiperSlide>
        <SwiperSlide>{componente3}</SwiperSlide>
        <SwiperSlide>{componente4}</SwiperSlide>
        <SwiperSlide>{componente5}</SwiperSlide>
        <SwiperSlide>{componente6}</SwiperSlide>
      </Swiper>
    </>
  );
}

CarouselView.propTypes = {
  componente1: PropTypes.node,
  componente2: PropTypes.node,
  componente3: PropTypes.node,
  componente4: PropTypes.node,
  componente5: PropTypes.node,
  componente6: PropTypes.node,
  componente7: PropTypes.node,
  componente8: PropTypes.node,
  componente9: PropTypes.node,
};
