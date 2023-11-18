import React from 'react';
import PropTypes from 'prop-types';
import './carouselPaginaGB.css';

function CarouselPaginaGB({srcImg, altImg, title, text}) {
  return (
    <div className='carousel-pagina-gb-conteudo'>
      <img src={srcImg} alt={altImg} />
      <div className='caroulsel-pagina-gb-text'>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

CarouselPaginaGB.propTypes = {
  srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


export default CarouselPaginaGB;