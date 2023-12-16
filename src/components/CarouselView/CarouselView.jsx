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
  componente1: PropTypes.node.isRequired,
  componente2: PropTypes.node.isRequired,
  componente3: PropTypes.node.isRequired,
  componente4: PropTypes.node.isRequired,
  componente5: PropTypes.node.isRequired,
  componente6: PropTypes.node.isRequired,
  componente7: PropTypes.node.isRequired,
  componente8: PropTypes.node.isRequired,
  componente9: PropTypes.node.isRequired,
};
