import React from 'react';
import PropTypes from 'prop-types';
import './cardPublicidade.css';

function CardPublicidade() {
  return (
    <div className='card-publicidade'>
      <div>
        Anuncios
      </div>
      <hr />
      <p>Publicidade</p>
    </div>
  );
}

CardPublicidade.propTypes = {
  srcImg: PropTypes.string.isRequired
};

export default CardPublicidade;