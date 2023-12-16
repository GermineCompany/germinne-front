import React from 'react';
import PropTypes from 'prop-types';
import './imagemUltimosServicos.css';

function ImagemUltimosServicos({ srcImg, titulo, local, texto }) {
  return (
    <div className='imagem-ultimos-servicos'>
      <div>
        <img src={srcImg} alt="Imagem de uma serviço do horticultor" />
        <div>

          <h3><a href="">{titulo}</a></h3>

          <p className='localizacao-card-portifilio'>{local}</p>
          <p>{texto}</p>
        </div>
      </div>
    </div>
  );
}

ImagemUltimosServicos.propTypes = {
  srcImg: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  local: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired
};

export default ImagemUltimosServicos;