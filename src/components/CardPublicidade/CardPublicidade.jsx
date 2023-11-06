import React from 'react';
import PropTypes from 'prop-types';
import './cardPublicidade.css';

function CardPublicidade({ srcImg }) {
  return (
    <div className='card-publicidade'>
      <img src={ srcImg } alt="Propaganda" />
      <hr />
      <p>Publicidade</p>
    </div>
  );
}

CardPublicidade.propTypes = {
  srcImg: PropTypes.string.isRequired
};

export default CardPublicidade;