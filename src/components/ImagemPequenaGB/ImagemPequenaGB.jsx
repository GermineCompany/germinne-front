import React from 'react';
import PropTypes from 'prop-types';
import './imagemPequenaGB.css';

function ImagemPequenaGB({ srcImg }) {
  return (
    <div className='imagem-pequena-gb'>
      <img src={ srcImg } alt="Imagem ilustrativa da Germinne Box" />
    </div>
  );
}

ImagemPequenaGB.propTypes={
  srcImg: PropTypes.string.isRequired, 
  altImg: PropTypes.string.isRequired,
};

export default ImagemPequenaGB;