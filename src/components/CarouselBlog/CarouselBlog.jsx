import React from 'react';
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
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={true}
        loop={true}
      >
        <SwiperSlide>
          <div className='box-slide-imagem-1 slide-carousel'>
          <span>Agricultura Urbana</span>
            <h2>Conheça o Telhado Verde do Shopping Eldorado: Iniciativa promove horta e compostagem.</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='box-slide-imagem-2 slide-carousel'>
            <span>Cultivo</span>
            <h2>Como plantar coentro: passo a passo</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default CarouselBlog;