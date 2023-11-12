import React from 'react';
import PropTypes from 'prop-types';
import './cardHomeServicos.css';
import { useNavigate } from 'react-router-dom';

function CardHomeServicos({ subtitle, title, className, routeName }) {
  const navigate = useNavigate();

  const redirect = (route) => navigate(`/${route}`);

  return (
    <div className='card-home-servicos' onClick={ () => redirect(routeName) }>
      <div className={ className }>
        <h2>{title}</h2>
      </div>

      <h3>{subtitle}</h3>
    </div>
  );
}

CardHomeServicos.propTypes = {
  subtitle: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired
};

export default CardHomeServicos;