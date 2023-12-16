import React from 'react';
import './beneficiosParaVoce.css';
import PropTypes from 'prop-types';

function BeneficiosParaVoce({ urlImg, altImg, titulo, texto, urlImg2, altImg2, titulo2, texto2 }) {
  return (

    <div className='box-beneficios-para-voce'>

      <div className='beneficios-para-voce'>
        <img src={urlImg} alt={altImg} />
        <h3>{titulo}</h3>
        <p>{texto}</p>
      </div>

      <div className='beneficios-para-voce'>
        <img src={urlImg2} alt={altImg2} />
        <h3>{titulo2}</h3>
        <p>{texto2}</p>
      </div>


    </div>
  );
}

BeneficiosParaVoce.propTypes = {
  urlImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  urlImg2: PropTypes.string.isRequired,
  altImg2: PropTypes.string.isRequired,
  titulo2: PropTypes.string.isRequired,
  texto2: PropTypes.string.isRequired
};

export default BeneficiosParaVoce;
