import React from 'react';
import PropTypes from 'prop-types';
import './cardConteudoGB.css';

function CardConteudoGB({ srcImg, altImg, text }) {
  return (
    <div className='card-conteudo-gb'>
      <img src={srcImg} alt={altImg} />
      <hr />
      <p className="text">{text}</p>
    </div>
  );
}

CardConteudoGB.propTypes = {
  srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardConteudoGB;

