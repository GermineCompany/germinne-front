import React from 'react';
import PropTypes from 'prop-types';
import './botaoSelecaoGB.css';

function BotaoSelecaoGB({ contentButton, className, changeClass }) {
  return (
    <div className='botao-selecao-gb'>
      <button 
        className={ className }
        onClick={ changeClass }
      >
        { contentButton }
      </button>
    </div>
  );
}

BotaoSelecaoGB.propTypes = {
  contentButton: PropTypes.string.isRequired,
  className: PropTypes.string,
  changeClass: PropTypes.func.isRequired
};

export default BotaoSelecaoGB;