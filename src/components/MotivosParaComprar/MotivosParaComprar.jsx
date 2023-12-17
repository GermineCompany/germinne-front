import React from 'react';
import PropTypes from 'prop-types';
import './motivosParaComprar.css';

function MotivosParaComprar({srcImg, altImg, titulo, texto }) {
  return (
    <div className='card-motivos-para-comprar'>
      <img src={srcImg} alt={altImg} />
      <div className="text-card-motivos">
        <h2>
          {titulo}
        </h2>
        <p>
          {texto}
        </p>
      </div>
    </div>
  );
}

MotivosParaComprar.propTypes = {
  srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};

export default MotivosParaComprar;