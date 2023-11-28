import React from 'react';
import PropTypes from 'prop-types';
import './cardPlanos.css';
import checkWhite from '../../images/check-white.svg';

function CardPlanos({ nomePlano, precoPlano, topico1, topico2, topico3 }) {
  return (
    <div className='card-planos'>
      <div>
        <p>{nomePlano}</p>
        <h2>{precoPlano}</h2>
      </div>
      <div>

        <section>
          <img src={checkWhite} alt='check-branco' />
          <p>{topico1}</p>
        </section>
        <section>
          <img src={checkWhite} alt='check-branco' />
          <p>{topico2}</p>
        </section>
        <section>
          <img src={checkWhite} alt='check-branco' />
          <p>{topico3}</p>
        </section>

      </div>
      <div>
        <button>Assinar</button>
      </div>
    </div>
  );
}

CardPlanos.propTypes = {
  nomePlano: PropTypes.string.isRequired,
  precoPlano: PropTypes.array.isRequired,
  topico1: PropTypes.string.isRequired,
  topico2: PropTypes.string.isRequired,
  topico3: PropTypes.string.isRequired,
};

export default CardPlanos;