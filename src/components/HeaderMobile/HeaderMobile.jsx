import React, { useState } from 'react';
import logo from '../../images/logo-verde.svg';
import sacola from '../../images/sacola.png';
import fecharMenu from '../../images/fechar-menu.png';
import menu from '../../images/menu.png';
import './headerMobile.css';
import 'animate.css';


function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => setMenuOpen(menuOpen ? false : true);

  return (
    <>


      <header className={!menuOpen ? '' : 'box-header-mobile'}>

        <div className={!menuOpen ? 'esconder-menu-mobile animate__slideOutRight' : 'menu-mobile animate__animated animate__bounceInDown'}>

          <div>
            <div className='header-box'>
              <img src={logo} alt="Logo verde" />
              <a href="/">
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
              <li>Home</li>
              <li>Blog</li>
              <li>GerminneBox</li>
              <li>Profissionais</li>
              <li>Sobre nós</li>
            </ul>
          </nav>

        </div>

        <div className={menuOpen ? 'esconder-menu-mobile' : 'header-mobile'}>
          <div>
            <img onClick={handleMenu} src={menu} alt="iconeMenu-Mobile" />
          </div>

          <div className='header-box'>
            <a href="/home">
              <img src={logo} alt="Logo verde" />
              <h1>Germinne</h1>
            </a>
          </div>

          <div className='box-sacola'>
            <div>
              <a href="/carrinho">
                <img src={sacola} alt="Sacola verde" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderMobile;