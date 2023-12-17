import React, { useState } from 'react';
import imagemLogin from '../../images/login-profissional.png';
import '../Login/loginCadastro.css';
import './cadastroProfissional.css';
import { useNavigate } from 'react-router-dom';
import logoVerde from '../../images/logo-verde.svg';
import api from '../../utils/axios';

function CadastroProfissional() {
  const navigate = useNavigate();

  const [infos, setInfos] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    confirmSenha: '',
    cpf: ''
  });

  const [statusRegister, setStatusRegister] = useState({
    status: '',
    message: ''
  });

  const [validateInfos, setValidateInfos] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    confirmSenha: '',
    cpf: ''
  });

  const handleChange = (event) => {
    setInfos({ ...infos, [event.target.name]: event.target.value });

    validate(event.target.name, event.target.value);
  };

  const validateNome = (nome) => {
    if (nome.length < 3) {
      setValidateInfos({ ...validateInfos, nome: 'Digite um nome com pelo menos 3 caracteres!'});
      return false;
    } else {
      setValidateInfos({ ...validateInfos, nome: ''});
      return true;
    } 
  };

  const validateSobrenome = (sobrenome) => {
    if (sobrenome.length < 5) {
      setValidateInfos({ ...validateInfos, sobrenome: 'Digite um sobrenome com pelo menos 5 caracteres!'});
      return false;
    } else {
      setValidateInfos({ ...validateInfos, sobrenome: ''});
      return true;
    }
  };

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;

    if (regex.test(email)) {
      setValidateInfos({ ...validateInfos, email: '' });
      return true;
    } else {
      setValidateInfos({ ...validateInfos, email: 'Digite um email válido!' });
      return false;
    }
  };

  const validateSenha = (info) => {
    if (infos.senha !== info) {
      setValidateInfos({ ...validateInfos, senha: 'As senhas não estão iguais!'});
      return false;
    } else {
      setValidateInfos({ ...validateInfos, senha: ''});
      return true;
    }
  };

  const validateCPF = (cpf) => {
    if (cpf.length !== 11) {
      setValidateInfos({ ...validateInfos, cpf: 'Digite um CPF com 11 digitos e sem pontuação!'});
      return false;
    } else {
      setValidateInfos({ ...validateInfos, cpf: ''});
      return true;
    }
  };

  const validate = (nameInfo, info) => {
    switch (nameInfo) {
    case 'nome':
      validateNome(info);
      break;
    case 'sobrenome':
      validateSobrenome(info);
      break;
    case 'email':
      validateEmail(info);
      break;
    case 'confirmSenha':
      validateSenha(info);
      break;
    case 'cpf':
      validateCPF(info);
      break;
    }
  };

  const handleRegister = async () => {
    try {
      const result = await api.post('/profissional/registro', infos);
      delete result.data.message;
      localStorage.setItem('userInfo', JSON.stringify({ ...result.data, tipo: 'profissional' }));
      setStatusRegister({ status: 'success', message: result.data.message });
      setTimeout(() => window.location.href = '/', 2000);
    } catch(error) {
      setStatusRegister({ status: 'error', message: error.response.data.message });
    }
  };

  return (
    <div className='box-login-cadastro'>
      <div>
        <img src={imagemLogin} alt="Imagem de uma mão plantando uma planta" />
      </div>

      <article className='box-inputs-login-cadastro'>
        <div className='logomarca-germinne-geral'>
          <div className='logomarca-germinne-login-profissional logomarca-margin'>
            <a href="/">
              <img src={logoVerde} alt="logo verde germinne" />
            </a>
            <h1><a href="/">Germinne</a></h1>
          </div>
          <h3>Profissional</h3>
        </div>

        <div className='box-email-password label-cadastro-profissional'>
          <div>
            <label>
              Nome
              <span>{validateInfos.nome}</span>
              <input
                type='text'
                name='nome'
                value={infos.nome}
                onChange={handleChange}
                placeholder='Digite seu nome aqui...'
              />
            </label>
          </div>

          <div>
            <label>
              Sobrenome
              <span>{validateInfos.sobrenome}</span>
              <input
                type='text'
                name='sobrenome'
                value={infos.sobrenome}
                onChange={handleChange}
                placeholder='Digite seu sobrenome aqui...'
              />
            </label>
          </div>

          <div>
            <label className='Email'>
              Email
              <span>{validateInfos.email}</span>
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
              <span>{validateInfos.senha}</span>
              <input
                type='password'
                name='senha'
                value={infos.senha}
                onChange={handleChange}
                placeholder='Digite sua senha aqui...'
              />
            </label>
          </div>

          <div>
            <label>
              Confirme a senha
              <span>{validateInfos.senha}</span>
              <input
                type='password'
                name='confirmSenha'
                value={infos.confirmSenha}
                onChange={handleChange}
                placeholder='Confirme sua senha...'
              />
            </label>
          </div>

          <div>
            <label>
              CPF
              <span>{validateInfos.cpf}</span>
              <input
                type='text'
                name='cpf'
                value={infos.cpf}
                onChange={handleChange}
                placeholder='Digite seu CPF aqui...'
              />
            </label>
          </div>

          <div className={`box-tratamento-erro ${statusRegister.status == 'error' ? 'mensagem-erro' : 'mensagem-sucesso'}`}>
            <p>{ statusRegister.message }</p>
          </div>

          <div className='box-button'>
            <button onClick={handleRegister}>Cadastrar</button>
          </div>
        </div>

        <div className='box-cadastro box-cadastro-profissional'>
          <hr />
          <p>Já possui conta na Germinne?</p>
          <button onClick={() => navigate('/login')}>Login</button>
        </div>
      </article>
    </div>
  );
}

export default CadastroProfissional;