import React from 'react';
import PropTypes from 'prop-types';
import './cardPerfilServico.css';

function CardPerfilServico({ service }) {
  return (
    <div className='card-perfil-servico'>
      <p>{ service }</p>
    </div>
  );
}

CardPerfilServico.propTypes = {
  service: PropTypes.string.isRequired,
};

export default CardPerfilServico;