import React from 'react';
import PropTypes from 'prop-types';
import './botaoSelecaoGB.css';

function BotaoSelecaoGB({ contentButton }) {
  return (
    <div className='botao-selecao-gb'>
      <button>{ contentButton }</button>
    </div>
  );
}

BotaoSelecaoGB.propTypes = {
  contentButton: PropTypes.string.isRequired,
};

export default BotaoSelecaoGB;