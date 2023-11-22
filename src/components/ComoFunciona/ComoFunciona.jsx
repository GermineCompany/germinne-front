import React from 'react';
import './comoFunciona.css';
import PropTypes from 'prop-types';

function ComoFunciona({ urlImg, altImg, conteudo }) {
  return (

    <div className='card-como-funciona'>
      <img src={urlImg} alt={altImg} />
      <div>
        <p>{conteudo}</p>
      </div>
    </div>

  );
}

ComoFunciona.propTypes = {
  urlImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  conteudo: PropTypes.string.isRequired,
};

export default ComoFunciona;