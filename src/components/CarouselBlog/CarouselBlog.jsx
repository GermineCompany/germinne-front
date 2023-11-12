import React from 'react';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss?inline';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss?inline';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import imagem from '../../images/banner-blog.svg';
import imagem2 from '../../images/artigo-exemplo.png';
import './carouselBlog.css';

function CarouselBlog() {
  return (
    <AwesomeSlider
      cssModule={[CoreStyles, AnimationStyles]}
      animation="foldOutAnimation"
      bullets={ false }
      className='carousel-blog'
      infinite={ true }
    >
      <div data-src={ imagem } />
      <div data-src={ imagem2 } />
      <div data-src={ imagem2 } />
    </AwesomeSlider>
  );
}

export default CarouselBlog;