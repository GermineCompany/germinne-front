import React from 'react';
import PropTypes from 'prop-types';
import './botaoSelecaoGB.css';

function BotaoSelecaoGB({ contentButton, className }) {
  return (
    <div className='botao-selecao-gb'>
      <button className={ className }>{ contentButton }</button>
    </div>
  );
}

BotaoSelecaoGB.propTypes = {
  contentButton: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BotaoSelecaoGB;