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
            <p>Como hortas urbanas reduzem as ilhas térmicas nas cidades</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='box-slide-imagem-2 slide-carousel'>
            <p>Transformando cidades com hortas urbanas sustentáveis</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default CarouselBlog;