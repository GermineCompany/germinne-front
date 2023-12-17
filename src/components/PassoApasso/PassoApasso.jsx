import React from 'react';
import './passoApasso.css';
import PropTypes from 'prop-types';

function PassoApasso({titulo, texto, srcImg, altImg }) {
  return (

    <div className='card-passo-a-passo'>
      <h3>{titulo}</h3>
      <div>
      <img src={srcImg} alt={altImg} />
      <p>{texto}</p>  
      </div>
    </div>

  );
}

PassoApasso.propTypes = {
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
};

export default PassoApasso;