import React from 'react';
import PropTypes from 'prop-types';
import './chatMensagem.css';

function ChatMensagem({ srcImg, textChat }) {
  return (
    <div className='chat-mensagem'>
      <div className='box-foto'>
        <img src={ srcImg } alt="Foto do úsuario" />
      </div>

      <div className='box-mensagem'>
        <p>{ textChat }</p>
      </div>
    </div>
  );
}

ChatMensagem.propTypes = {
  srcImg: PropTypes.string.isRequired,
  textChat: PropTypes.string.isRequired,
};

export default ChatMensagem;