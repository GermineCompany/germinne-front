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
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={true}
        loop={true}
      >
        <SwiperSlide>
          <div className='bannerpost1'>Projeto Telhado Verde no shopping Eldorado destina 100% da sua produção aos seus funcionários</div>
        </SwiperSlide>

        <SwiperSlide>
          <div  className='bannerpost2'>Este artigo revela como o Shopping Eldorado se transforma em um refúgio verde e relaxante no meio da cidade, proporcionando uma experiência única para quem busca tranquilidade em São Paulo.</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default CarouselBlog;