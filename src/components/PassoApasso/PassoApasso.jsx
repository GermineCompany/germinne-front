import React from 'react';
import './passoApasso.css';
import PropTypes from 'prop-types';

function PassoApasso({ titulo, srcImg, altImg }) {
  return (

    <div className='card-passo-a-passo'>
      <h3>{titulo}</h3>  
      <img src={srcImg} alt={altImg} />

    </div>

  );
}

PassoApasso.propTypes = {
  titulo: PropTypes.array.isRequired,
  srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
};

export default PassoApasso;