import React from 'react';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import estrelas from '../../images/stars.png';
import './cardHorticultor.css';
import { useNavigate } from 'react-router-dom';

function CardHorticultor({ srcImg, name, description, rating }) {
  const navigate = useNavigate();

  return (
    <div className='card-horticultor'>
      <div className='foto-rating-horticultor'>
        <div>
          <img src={ srcImg } alt="Foto do horticultor" />
        </div>

        <div>
          <p>{ rating }</p>
          <img src={ estrelas } alt="Imagem de estrelas" />
        </div>
      </div>

      <div className='descricao-horticultor'>
        <p>{ name }</p>
        <p>{ description }</p>
      </div>

      <div className='botoes-contato-horticultor'>
        <div>
          <button onClick={() => navigate('/perfil-horticultor/2')}>Ver perfil</button>
        </div>

        <div>
          <button ><RiWhatsappFill /> WhatsApp </button>
          <button >Solicitar orçamento</button>
          <button><FaPhoneAlt /> Telefone </button>
        </div>
      </div>
    </div>
  );
}

CardHorticultor.propTypes = {
  srcImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
};

export default CardHorticultor;