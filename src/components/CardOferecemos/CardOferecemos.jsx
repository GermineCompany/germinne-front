import React from 'react';
import './cardOferecemos.css';
import check from '../../images/check.svg';
import PropTypes from 'prop-types';

function CardOferecemos({text}) {
  return (
    <div className='card-oferecemos'>
      <p>{text}</p>
      <img src={check} alt="check" />
    </div>
  );
}

CardOferecemos.propTypes = {
  text: PropTypes.string.isRequired,
};
export default CardOferecemos;