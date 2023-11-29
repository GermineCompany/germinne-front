import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import './servicoPerfilVitrine.css';

function ServicoPerfilVitrine({ text }) {
  return (
    <div className='servico-perfil-vitrine'>
      <p>{ text }</p>
      <IoCloseCircleOutline />
    </div>
  );
}

ServicoPerfilVitrine.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ServicoPerfilVitrine;