import React from 'react';
import logo from '../../images/logo-verde.svg';
import sacola from '../../images/sacola.svg';
import './header.css';

function Header() {
  return (
    <header>
      <div className='header-box'>
        <img src={ logo } alt="Logo verde" />
        <a href="/home">
          <h1>Germinne</h1>
        </a>
      </div>

      <nav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>

          <li>
            <a href="/blog">Blog</a>
          </li>

          <li>
            <a href="/loja">Loja</a>
          </li>

          <li>
            <a href="/receitas">Receitas</a>
          </li>

          <li>
            <a href="/sobre-nos">Sobre nós</a>
          </li>
        </ul>
      </nav>

      <div className='header-box'>
        <button>
          <a href="/login">Entrar</a>
        </button>

        <a href="/carrinho">
          <img src={ sacola } alt="Icone de sacola" />
        </a>
      </div>
    </header>
  );
}

export default Header;