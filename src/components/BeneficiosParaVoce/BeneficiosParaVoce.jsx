import React from 'react'
import "./beneficiosParaVoce.css"
import PropTypes from 'prop-types';

function BeneficiosParaVoce({urlImg, altImg, titulo, texto }) {
    return (

        <div className='beneficios-para-voce'>
            <div>
                <img src={urlImg} alt={altImg} />
                <h2>{titulo}</h2>
                <p>{texto}</p>
            </div>
        </div>
    )
}

BeneficiosParaVoce.propTypes = {
    urlImg: PropTypes.string.isRequired,
    altImg: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired
  };

export default BeneficiosParaVoce;
