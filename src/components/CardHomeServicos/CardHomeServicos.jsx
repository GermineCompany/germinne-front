import React from 'react';
import PropTypes from 'prop-types';
import './cardHomeServicos.css';

function CardHomeServicos({ subtitle, title, className }) {
  return (
    <div className='card-home-servicos'>
      <div className={ className }>
        <h2>{title}</h2>
      </div>

      <h3>{subtitle}</h3>
    </div>
  );
}

CardHomeServicos.propTypes = {
  subtitle: PropTypes.array .isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default CardHomeServicos;