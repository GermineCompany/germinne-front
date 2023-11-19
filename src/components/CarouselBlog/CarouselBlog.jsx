import React from 'react';
import imagem from '../../images/banner-blog.svg';
import imagem2 from '../../images/banner-home.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';

import './carouselBlog.css';

function CarouselBlog() {
  return (
    <>
      <Swiper
        effect={'fade'}
        navigation={true} 
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper carousel-blog"
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={true}
        loop={true}
      >
        <SwiperSlide>
          <img src={ imagem } alt="Imagem do banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ imagem2 } alt="Imagem do banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ imagem } alt="Imagem do banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ imagem2 } alt="Imagem do banner 1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default CarouselBlog;