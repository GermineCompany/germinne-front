import React, { useState } from 'react';
import imagemLogin from '../../images/login-cliente.png';
import '../Login/loginCadastro.css';

function CadastroCliente() {
  const [infos, setInfos] = useState({
    email: '',
    password: '',
    name: '',
    CPF: ''
  });

  const handleChange = (event) => setInfos({ ...infos, [event.target.name]: event.target.value });

  return (
    <div className='box-login-cadastro'>
      <div>
        <img src={ imagemLogin } alt="Imagem de uma mão plantando uma planta" />
      </div>

      <article className='box-inputs-login-cadastro box-inputs-cliente'>
        <div>
          <h1>Germinne</h1>
          <h3>Cliente</h3>
        </div>

        <div className='box-email-password label-cadastro-profissional'>
          <div>
            <label>
              Nome e sobrenome
              <input 
                type='text' 
                name='name' 
                value={ infos.name } 
                onChange={ handleChange }
                placeholder='Digite seu nome e sobrenome aqui...'
              />
            </label>
          </div>

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

          <div>
            <label>
              CPF
              <input 
                type='text' 
                name='CPF' 
                value={ infos.CPF } 
                onChange={ handleChange }
                placeholder='Digite seu CPF aqui...'
              />
            </label>
          </div>

          <div className='box-button'>
            <button>Cadastrar</button>
          </div>
        </div>

        <div className='box-cadastro box-cadastro-profissional'>
          <hr />
          <p>Já possui conta na Germinne?</p>
          <button>Login</button>
        </div>


      </article>
    </div>
  );
}

export default CadastroCliente;