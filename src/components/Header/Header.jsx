import React from 'react';
import logo from '../../images/logo-verde.svg';
import sacola from '../../images/sacola.png';
import './header.css';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import { useState } from 'react';


function Header() {
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(showLogin ? false : true);
    console.log(showLogin);
  }; 

  return (
    <>
      <HeaderMobile id="component-mobile" />

      <header className='header-desktop'>

        <div>
          <div className='box-logo-nome'>
            <img src={logo} alt="Logo verde" />
            <a href="/">
              <h1>Germinne</h1>
            </a>
          </div>

          <nav>
            <ul>
              <li>
                <a href="/">Inicio</a>
              </li>

              <li>
                <a href="/blog">Blog</a>
              </li>

              <li>
                <a href="/loja">Germinne Box</a>
              </li>

              <li>
                <a href="/receitas">Profissionais</a>
              </li>

              <li>
                <a href="/sobre-nos">Sobre nós</a>
              </li>
            </ul>
          </nav>
        
          <div className='box-login'>
            <div>
              <button className={ showLogin ? 'button-opened' : ''} onClick={ handleShowLogin }>Entrar</button>

              <div className={`links-login ${showLogin ? 'open-login' : 'close-login'}`}>
                <ul>
                  <li><a href="/login-cliente">Cliente</a></li>
                  <li><a href="/login">Profissional</a></li>
                </ul>
              </div>

            </div>

            <a href="/carrinho">
              <img src={sacola} alt="Icone de sacola" />
            </a>
          </div>
        </div>

      </header>
    </>
  );
}

export default Header;