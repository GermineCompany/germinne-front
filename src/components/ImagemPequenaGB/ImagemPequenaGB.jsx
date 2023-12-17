import React from 'react';
import PropTypes from 'prop-types';
import './imagemPequenaGB.css';

function ImagemPequenaGB({ srcImg, funcClick }) {
  return (
    <div onClick={ funcClick } className='imagem-pequena-gb'>
      <img src={ srcImg } alt="Imagem ilustrativa" />
    </div>
  );
}

ImagemPequenaGB.propTypes={
  srcImg: PropTypes.string.isRequired, 
  altImg: PropTypes.string.isRequired,
  funcClick: PropTypes.func,
};

export default ImagemPequenaGB;