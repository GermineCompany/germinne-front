import React from 'react';
import './cardValores.css';
import PropTypes from 'prop-types';

function CardValores({ titulo, descricao, srcImg }) {
  return (
    <div className='card-valores'>
      <div>
        <img src={ srcImg } alt="Icone de uma mão" />
      </div>

      <div>
        <h4>{ titulo }</h4>
        <p>{ descricao }</p>
      </div>
    </div>
  );
}

CardValores.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  srcImg: PropTypes.string.isRequired,
};

export default CardValores;