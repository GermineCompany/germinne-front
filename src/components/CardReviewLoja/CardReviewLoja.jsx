import React from 'react';
import estrelas from '../../images/estrelas.svg';
import './cardReviewLoja.css';
import PropTypes from 'prop-types';

function CardReviewLoja({ nomeCliente, fotoCliente, fotoReview, descricao }) {
  return (
    <div className='card-review-loja'>
      <div className='card-review-loja-nome'>
        <img src={ fotoCliente } alt="Imagem do cliente" />
        <p>{ nomeCliente }</p>
        <div>
        <img src={ estrelas } alt="Cinco estrelas de cor verde" />
          <p>5,0</p>
        </div>
      </div>

      <div>
        <img src={ fotoReview } alt="Imagem de um vaso autoirrigavel" />
      </div>

      <div className='card-review-loja-descricao'>
        <p>{ descricao }</p>
      </div>
    </div>
  );
}

CardReviewLoja.propTypes = {
  nomeCliente: PropTypes.string.isRequired,
  fotoCliente: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  fotoReview: PropTypes.string.isRequired,
};

export default CardReviewLoja;