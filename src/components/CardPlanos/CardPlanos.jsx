import React from 'react';
import PropTypes from 'prop-types';
import './cardPlanos.css';

function CardPlanos({ nomePlano, precoPlano, texto }) {
  return (
    <div className='card-planos'>
      <div>
        <h3>{nomePlano}</h3>
      </div>

      <div>

        <div>
          <div>
            <h2>{precoPlano}</h2>
            <p>{texto}</p>
          </div>

          <button>Assinar</button>
        </div>

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