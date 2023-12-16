import React, { useState } from 'react';
import imagemLogin from '../../images/login-profissional.png';
import './loginCadastro.css';
import { useNavigate } from 'react-router-dom';
import logoVerde from '../../images/logo-verde.svg';

function Login() {
  const navigate = useNavigate();

  const [infos, setInfos] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => setInfos({ ...infos, [event.target.name]: event.target.value });

  return (
    <div className='box-login-cadastro'>
      <div>
        <img src={imagemLogin} alt="Imagem de uma mão plantando uma planta" />
      </div>

      <article className='box-inputs-login-cadastro'>
        <div className='logomarca-germinne-geral'>
          <div className='logomarca-germinne-login-profissional'>
            <a href="/">
              <img src={logoVerde} alt="logo verde germinne" />
            </a>
            <h1><a href="/">Germinne</a></h1>
          </div>
          <h3>Profissional</h3>
        </div>

        <div>

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
                  name='password'
                  value={infos.password}
                  onChange={handleChange}
                  placeholder='Digite sua senha aqui...'
                />
              </label>
            </div>

            <div className='box-button'>
              <button>Entrar</button>
            </div>
          </div>

          <div className='box-cadastro'>
            <hr />
            <p>Não possui conta na Germinne?</p>
            <button onClick={() => navigate('/cadastro-profissional')}>Cadastre-se</button>
          </div>

        </div>
      </article>
    </div>
  );
}

export default Login;