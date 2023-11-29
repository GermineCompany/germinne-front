import React from 'react';
import './beneficiosParaVoce.css';
import PropTypes from 'prop-types';

function BeneficiosParaVoce({ urlImg, altImg, titulo, texto }) {
  return (
    <div className="beneficios-para-voce">
      <img src={urlImg} alt={altImg} />
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </div>
  );
}

BeneficiosParaVoce.propTypes = {
  urlImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};

export default BeneficiosParaVoce;
