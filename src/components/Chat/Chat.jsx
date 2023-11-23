import React, { useState } from 'react';
import ChatMensagem from '../MensagemChat/ChatMensagem';
import imagemHorticultor from '../../images/horticultor-exemplo.png';
import './chat.css';

function Chat() {
  const [input, setInput] = useState('');

  const handleChange = (event) => setInput(event.target.name);

  return (
    <div className='component-chat'>
      <div>
        <h2>Chat de negociação</h2>
      </div>

      <div className='box-mensagens'>
        <ChatMensagem 
          srcImg={ imagemHorticultor } 
          textChat='Olá, preciso de orçamento para fazer uma horta com as seguinte informações: Tamanho aproximado: pequeno (Até 50m); Local: casa; Prazo: próximos 7 dias; Detalhes: preciso de uma horta para cultir cebolinha, salsa, coentro, tomate cereja e alecrim.'
        />

        <ChatMensagem 
          srcImg={ imagemHorticultor } 
          textChat='oi hirtucyktir faz yna hirta ora nun aqyu en casa oir favirzunhi'
        />

        <ChatMensagem 
          srcImg={ imagemHorticultor } 
          textChat='oi hirtucyktir faz yna hirta ora nun aqyu en casa oir favirzunhi'
        />
      </div>

      <div className='box-input-chat'>
        <div>
          <label>
            <input 
              type='email' 
              name='email' 
              value={ input } 
              onChange={ handleChange }
              placeholder='Digite sua mensagem...'
            />
          </label>
        </div>

        <button>Enviar</button>
      </div>
    </div>
  );
}

export default Chat;