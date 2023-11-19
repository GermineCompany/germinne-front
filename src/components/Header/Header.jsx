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

          <nav>
            <ul>
              <li className="nav-item">
                <a href="/">Inicio<div className="underline" /></a>
              </li>

              <li className="nav-item">
                <a href="/blog">Blog<div className="underline" /></a>
              </li>

              <li className="nav-item">
                <a href="/loja">Germinne Box<div className="underline" /></a>
              </li>

              <li className="nav-item">
                <a href="/horticultores">Horticultores<div className="underline" /></a>
              </li>

              <li className="nav-item">
                <a href="/trabalhe-conosco">Trabalhe conosco<div className="underline" /></a>
              </li>

              <li className="nav-item">
                <a href="/sobre-nos">Sobre nós<div className="underline" /></a>
              </li>
             
            </ul>

            
              
          </nav>
        
          <div className='box-login'>
            <button>
              <a href="/login-cliente">Entrar</a>
            </button>

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