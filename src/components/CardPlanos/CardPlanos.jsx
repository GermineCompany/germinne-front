import React from 'react';
import PropTypes from 'prop-types';
import './cardPlanos.css';

function CardPlanos({ nomePlano, precoPlano, texto }) {
  return (
    <div className='card-planos'>
      <h3>{nomePlano}</h3>
      <div>
        <h2>{precoPlano}</h2>
        <p>{texto}</p>
        <button>Assinar</button>
      </div>
    </div>
  );
}

CardPlanos.propTypes = {
  nomePlano: PropTypes.string.isRequired,
  precoPlano: PropTypes.array.isRequired,
  texto: PropTypes.string.isRequired,
};

export default CardPlanos;