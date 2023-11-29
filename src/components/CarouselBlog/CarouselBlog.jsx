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
          <a href="">
            <div className="box-slide-imagem-1 slide-carousel">
              <div className='slide-content'>
                <span>AGRICULTURA URBANA</span>
                <h2>
                  Conheça o Telhado Verde do Shopping Eldorado: Iniciativa
                  promove horta e compostagem.
                </h2>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <div className="box-slide-imagem-2 slide-carousel">
              <div className='slide-content'>
                <span>CULTIVO</span>
                <h2>Como plantar coentro: passo a passo</h2>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <div className="box-slide-imagem-3 slide-carousel">
              <div className='slide-content'>
                <span>NOTÍCIAS</span>
                <h2>
                  Como hortas urbanas reduzem as ilhas térmicas nas cidades:
                </h2>
              </div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default CarouselBlog;
