import React, { useState } from 'react';
import imagemLogin from '../../images/ImagemCliente.svg';
import '../Login/loginCadastro.css';
import './loginCliente.css';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/axios';
import logoVerde from '../../images/logo-verde.svg';

function LoginCliente() {
  const navigate = useNavigate();
  const [infos, setInfos] = useState({
    email: '',
    senha: ''
  });

  const [statusLogin, setStatusLogin] = useState({ status: '', message: '' });

  const handleChange = (event) => setInfos({ ...infos, [event.target.name]: event.target.value });

  const handleLogin = async () => {
    try {
      const result = await api.post('/cliente/login', infos);
      setStatusLogin({ ...statusLogin, status: 'sucesso', message: result.data.message });
      localStorage.setItem('userInfo', JSON.stringify({ ...result.data, logged: true }));
      setTimeout(() => window.location.href = '/', 1500);
    } catch (error) {
      setStatusLogin({ ...statusLogin, status: 'error', message: error.response.data.message });
    }
  };

  return (
    <div className="box-login-cadastro">
      <div className='imagem-esquerda'>
        <img src={imagemLogin} alt="Imagem de uma mão plantando uma planta" />
      </div>

      <article className='box-inputs-login-cadastro box-inputs-cliente'>
        <div className='logomarca-germinne-geral'>
          <div className='logomarca-germinne-login-profissional'>
            <a href="/">
              <img src={logoVerde} alt="logo verde germinne" />
            </a>
            <h1><a href="/">Germinne</a></h1>
          </div>
          <h3>Cliente</h3>
        </div>

        <div className='box-email-password'>
          <div>
            <label>
              Email
              <input
                type='email'
                name='email'
                value={infos.email}
                onChange={handleChange}
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
                value={infos.senha}
                onChange={handleChange}
                placeholder='Digite sua senha aqui...'
              />
            </label>
          </div>

          <div className={`box-tratamento-erro ${statusLogin.status == 'error' ? 'mensagem-erro' : 'mensagem-sucesso'}`}>
            <p>{ statusLogin.message }</p>
          </div>

          <div className='box-button'>
            <button onClick={handleLogin}>Entrar</button>
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