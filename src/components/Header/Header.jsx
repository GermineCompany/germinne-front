import React from 'react';
import logo from '../../images/logo-verde.svg';
import sacola from '../../images/sacola.png';
import './header.css';
import HeaderMobile from '../HeaderMobile/HeaderMobile';


function Header() {
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

          <div className='box-login'>
            <button>
              <a href="/login-cliente">Entrar</a>
            </button>

            <a href="/carrinho">
              <img src={sacola} alt="Icone de sacola" />
            </a>
          </div>
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

      </header>
    </>
  );
}

export default Header;