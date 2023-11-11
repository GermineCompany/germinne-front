import React, { useState } from 'react';
import logo from '../../images/logo-verde.svg';
import sacola from '../../images/sacola.png';
import fecharMenu from '../../images/fechar-menu.png';
import './headerMobile.css';
import 'animate.css';


function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => setMenuOpen(menuOpen ? false : true);

  return (
    <>
      <div className={!menuOpen ? 'esconder-menu-mobile animate__slideOutRight' : 'menu-mobile animate__animated animate__slideInRight'}>

        <div>
          <div className='header-box'>
            <img src={logo} alt="Logo verde" />
            <a href="/home">
              <h1>Germinne</h1>
            </a>
          </div>

          <div>
            <img
              className='icone-fechar'
              onClick={handleMenu}
              src={fecharMenu}
              alt="Icone de um X"
            />
          </div>
        </div>

        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="">Loja</a></li>
            <li><a href="">Receitas</a></li>
            <li><a href="/sobre-nos">Sobre nós</a></li>
          </ul>
        </nav>

      </div>

      <header className={menuOpen ? 'esconder-menu-mobile' : 'header-mobile'}>
        <div>
          <p onClick={handleMenu}>&equiv;</p>
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