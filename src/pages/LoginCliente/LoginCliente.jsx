import React, { useState } from 'react';
import imagemLogin from '../../images/ImagemCliente.svg';
import '../Login/loginCadastro.css';
import './loginCliente.css';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/axios';

function LoginCliente() {
  const navigate = useNavigate();
  const [infos, setInfos] = useState({
    email: '',
    senha: ''
  });

  const [messages, setMessages] = useState({ messageError: '', messageSuccessful: '' });

  const handleChange = (event) => setInfos({ ...infos, [event.target.name]: event.target.value });

  const handleLogin = async () => {
    try {
      const result = await api.post('/cliente/login', infos);
      setMessages({ ...messages, messageSuccessful: result.data.message });
      localStorage.setItem('userInfo', JSON.stringify({...result.data, logged: true}));
      setTimeout(() => window.location.href = '/', 1500);
    } catch(error) {
      setMessages({ ...messages, messageError: error.response.data.message });
    }
  };

  return (
    <div className="box-login-cadastro">
      <div className='imagem-esquerda'>
        <img src={ imagemLogin } alt="Imagem de uma mão plantando uma planta" />
      </div>

      <article className='box-inputs-login-cadastro box-inputs-cliente'>
        <div>
          <h1>Germinne</h1>
          <h3>Cliente</h3>
        </div>

        <div>
          <span>{ messages.messageError }</span>
          <span className='mensagem-sucesso'>{ messages.messageSuccessful }</span>
        </div>

        <div className='box-email-password'>
          <div>
            <label>
              Email
              <input 
                type='email' 
                name='email' 
                value={ infos.email } 
                onChange={ handleChange }
                placeholder='Digite seu email aqui...'
              />
            </label>
          </div>

          <div>
            <label>
              Senha
              <input 
                type='password' 
                name='senha' 
                value={ infos.senha }
                onChange={ handleChange }
                placeholder='Digite sua senha aqui...'
              />
            </label>
          </div>

          <div className='box-button'>
            <button onClick={ handleLogin }>Entrar</button>
          </div>
        </div>

        <div className='box-cadastro'>
          <hr />
          <p>Não possui conta na Germinne?</p>
          <button onClick={() => navigate('/cadastro-cliente')}>Cadastre-se</button>
        </div>


      </article>
    </div>
  );
}

export default LoginCliente;