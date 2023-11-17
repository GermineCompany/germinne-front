import React, { useState } from 'react';
import imagemLogin from '../../images/login-profissional.png';
import google from '../../images/google.png';
import './loginCadastro.css';
import { useNavigate } from 'react-router-dom';

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
        <img src={ imagemLogin } alt="Imagem de uma mão plantando uma planta" />
      </div>

      <article className='box-inputs-login-cadastro'>
        <div>
          <h1>Germinne</h1>
          <h3>Profissional</h3>
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
                name='password' 
                value={ infos.password }
                onChange={ handleChange }
                placeholder='Digite sua senha aqui...'
              />
            </label>
          </div>

          <div className='box-button'>
            <button>Entrar</button>
          </div>
        </div>

        <div className='box-google'>
          <p>Ou faça login com sua conta do Google</p>
          <img src={ google } alt='Logo do Google' />
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

export default Login;