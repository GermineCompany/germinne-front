import React from 'react';
import logo from '../../images/logo-verde.svg';
import sacola from '../../images/sacola.png';
import fecharMenu from '../../images/fechar-menu.png';
import './headerMobile.css';


function HeaderMobile() {
  return (
    <>
      <div className='menu-mobile'>
        <div>
          <img src={fecharMenu} alt="Icone de um X" />
        </div>

        <div className='header-box'>
          <img src={logo} alt="Logo verde" />
          <a href="/home">
            <h1>Germinne</h1>
          </a>
        </div>

        <nav>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Loja</li>
            <li>Receitas</li>
            <li>Sobre nós</li>
          </ul>
        </nav>
      </div>

      <header className='header-mobile'>
        <div>
          <p>&equiv;</p>
        </div>

        <div className='header-box'>
          <img src={logo} alt="Logo verde" />
          <a href="/home">
            <h1>Germinne</h1>
          </a>
        </div>

        <div>
          <a href="/carrinho">
            <img src={sacola} alt="Sacola verde" />
          </a>
        </div>
      </header>
    </>
  );
}

export default HeaderMobile;