import React from 'react';
import PropTypes from 'prop-types';
import estrelas from '../../images/estrelas.svg';
import './cardAvaliacao.css';

function CardAvaliacao({ srcImg, altImg, description, name }) {
  return (
    <article className='card-avaliacao'>
      <img className='retrato-avaliacao' src={ srcImg } alt={ altImg } />
      <img src={ estrelas } alt="Cinco estrelas de cor verde" />
      <p className='avaliacao'>{ description }</p>
      <p className='nome-avaliacao'>{ name }</p>
    </article>
  );
}

CardAvaliacao.propTypes = {
  srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default CardAvaliacao;