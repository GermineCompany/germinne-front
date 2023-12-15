import React from 'react';
import PropTypes from 'prop-types';
import './futuroSobreNos.css';

function FuturoSobreNos({ srcImg, titulo, descricao }) {
  return (
    <div className='futuro-germinne'>
      <div>
        <img src={ srcImg } alt="Imagem ilustrativa do visão de futuro" />
      </div>

      <div>
        <h4>{ titulo }</h4>
        <p>{ descricao }</p>
      </div>
    </div>
  );
}

FuturoSobreNos.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  srcImg: PropTypes.string.isRequired,
};

export default FuturoSobreNos;