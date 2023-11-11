import PropTypes from 'prop-types';
import React from 'react';
import './cardSobreNos.css';

function CardSobreNos({ srcImg, altImg, title, text }) {
  return (
    <div className='card-sobre-nos'>
      <img src={ srcImg } alt={ altImg } />
      <h4>{ title }</h4>
      <p>{ text }</p>
    </div>
  );
}

CardSobreNos.propTypes = {
  srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};


export default CardSobreNos;