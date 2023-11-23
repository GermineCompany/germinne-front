import React from 'react';
import PropTypes from 'prop-types';
import './imagemUltimosServicos.css';

function ImagemUltimosServicos({ srcImg }) {
  return (
    <div className='imagem-ultimos-servicos'>
      <img src={ srcImg } alt="Imagem de uma serviço do horticultor" />
    </div>
  );
}

ImagemUltimosServicos.propTypes={
  srcImg: PropTypes.string.isRequired
};

export default ImagemUltimosServicos;