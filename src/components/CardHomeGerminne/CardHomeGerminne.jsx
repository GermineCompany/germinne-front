import React from 'react';
import PropTypes from 'prop-types';
import './cardHomeGerminne.css';

function CardHomeGerminne({ title, className, subtitle, id }) {
  return (
    <div className={ `card-germinne ${id}`}>
      <div>
        <h3>{subtitle}</h3>
      </div>

      <div className={`card-home-germinne ${className}`}>
        <h2>{ title }</h2>
      </div>
    </div>
  );
}

CardHomeGerminne.propTypes = {
  title: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  id: PropTypes.string
};

export default CardHomeGerminne;