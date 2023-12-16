import React, { useState } from 'react';
import logo from '../../images/logo-verde.svg';
import logoMobile from '../../images/logo-branco.svg';
import sacola from '../../images/sacola.png';
import fecharMenu from '../../images/fechar-menu.png';
import menu from '../../images/menu.png';
import './headerMobile.css';
import 'animate.css';

function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => setMenuOpen(menuOpen ? false : true);

  const [showDropdown, setShowDropdown] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  const handleShowDropdown = () => {
    setShowDropdown(showDropdown ? false : true);
    console.log('clicou');
  };

  const handleShowLogin = () => {
    setShowLogin(showLogin ? false : true);
    console.log('clicou');
  };

  return (
    <>
      <header className={!menuOpen ? '' : 'box-header-mobile'}>
        <div
          className={
            !menuOpen
              ? 'esconder-menu-mobile animate__slideOutRight'
              : 'menu-mobile animate__animated animate__bounceInDown'
          }>
          <div>
            <div className='header-box'>
              <img src={logoMobile} alt='Logo verde' />
              <a href='/'>
                <h1 className='color-h1-header-mobile'>Germinne</h1>
              </a>
            </div>

            <div>
              <img
                className='icone-fechar'
                onClick={handleMenu}
                src={fecharMenu}
                alt='Icone de um X'
              />
            </div>
          </div>

          <nav>
            <ul>
              <li className='login-cliente-menu-mobile'>
                <a href="/login-cliente">
                  Login Cliente
                </a>
              </li>
              <li className='login-cliente-menu-mobile'>
                <a href="/login">
                  Login Profissional
                </a>
              </li>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/blog'>Blog</a>
              </li>
              <li>
                <a href='/loja'>GerminneBox</a>
              </li>
              <li
                className={`${showDropdown ? 'margin-dropdown' : 'cursor-profissionais'}`}>
                <a onClick={handleShowDropdown}>Profissionais</a>
                <ul
                  className={`${showDropdown ? 'showDropdown-Mobile' : 'hideDropdown-Mobile'}`}>
                  <li>
                    <a href='/contrate'>Contrate</a>
                  </li>
                  <li>
                    <a href='/faca-parte'>Faça Parte</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='/sobre-nos'>Sobre nós</a>
              </li>


            </ul>
          </nav>
        </div>

        <div className={menuOpen ? 'esconder-menu-mobile' : 'header-mobile'}>
          <div>
            <img onClick={handleMenu} src={menu} alt='iconeMenu-Mobile' />
          </div>

          <div className='header-box'>
            <a href='/'>
              <img src={logo} alt='Logo verde' />
              <h1>Germinne</h1>
            </a>
          </div>

          <div className='box-sacola'>
            <div>
              <a href='/carrinho'>
                <img src={sacola} alt='Sacola verde' />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderMobile;
