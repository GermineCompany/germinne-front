import React, { useContext } from 'react';
import logo from '../../images/logo-verde.svg';
import './header.css';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import GerminneContext from '../../context/GerminneContext';

function Header() {
  const { loggedUser } = useContext(GerminneContext);
  const { pathname } = useLocation();

  const handleSair = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <>
      <HeaderMobile id="component-mobile" />

      <header className="header-desktop">
        <div>
          <div className="box-logo-nome">
            <img src={logo} alt="Logo verde" />
            <a href="/">
              <h1>GERMINNE</h1>
            </a>
          </div>

          <nav>
            <ul>
              <li className="nav-item">
                <a href="/">
                  Inicio
                  <div
                    className={`underline ${
                      pathname === '/' ? 'hold-underline' : ''
                    }`}
                  />
                </a>
              </li>

              <li className="nav-item">
                <a href="/blog">
                  Blog
                  <div
                    className={`underline ${
                      pathname === '/blog' ? 'hold-underline' : ''
                    }`}
                  />
                </a>
              </li>

              <li className="nav-item">
                <a href="/loja">
                  GerminneBox
                  <div
                    className={`underline ${
                      pathname === '/loja' ? 'hold-underline' : ''
                    }`}
                  />
                </a>
              </li>

              <li className="nav-item profissionais">
                <a href="/">Profissionais</a>
                <div className="dropdown-horticultores">
                  <a href="/contrate">Contrate</a>
                  <a href="/faca-parte">Faça parte</a>
                </div>
              </li>

              <li className="nav-item">
                <a href="/sobre-nos">
                  Sobre nós
                  <div
                    className={`underline ${
                      pathname === '/sobre-nos' ? 'hold-underline' : ''
                    }`}
                  />
                </a>
              </li>
            </ul>
          </nav>

          <div className="box-login">
            <div>
              {loggedUser.tipo == 'cliente' ||
              loggedUser.tipo == 'profissional' ? (
                  <div className="nome-usuario-logado">
                    <a href="/perfil">
                    Olá, <span>{loggedUser.nome}</span>
                    </a>
                    <button onClick={handleSair}>Sair</button>
                  </div>
                ) : (
                  <div className="botoes-cadastro-login">
                    <button>
                      <a href="/login-cliente">Cliente</a>
                    </button>

                    <button className="botao-profissional-header">
                      <a href="/login-profissional">Profissional</a>
                    </button>
                  </div>
                )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

Header.propTypes = {
  loggedUser: PropTypes.object.isRequired,
};

export default Header;