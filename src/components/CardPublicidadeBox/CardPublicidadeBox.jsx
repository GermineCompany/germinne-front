import React from 'react';
import './cardPublicidadeBox.css';
import PropTypes from 'prop-types';

function CardPublicidadeBox({ srcImg, altImg }) {
  return (
    <div className="card-publicidade-box">
      <img src={srcImg} alt={altImg} />
    </div>
  );
}

CardPublicidadeBox.propTypes = {
  srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
};

export default CardPublicidadeBox;
