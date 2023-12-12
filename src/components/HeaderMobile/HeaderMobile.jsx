import React, { useState } from "react";
import logo from "../../images/logo-verde.svg";
import sacola from "../../images/sacola.png";
import fecharMenu from "../../images/fechar-menu.png";
import menu from "../../images/menu.png";
import "./headerMobile.css";
import "animate.css";

function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => setMenuOpen(menuOpen ? false : true);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdown = () => {
    setShowDropdown(showDropdown ? false : true);
    console.log("clicou");
  };

  return (
    <>
      <header className={!menuOpen ? "" : "box-header-mobile"}>
        <div
          className={
            !menuOpen
              ? "esconder-menu-mobile animate__slideOutRight"
              : "menu-mobile animate__animated animate__bounceInDown"
          }>
          <div>
            <div className="header-box">
              <img src={logo} alt="Logo verde" />
              <a href="/">
                <h1>Germinne</h1>
              </a>
            </div>

            <div>
              <img
                className="icone-fechar"
                onClick={handleMenu}
                src={fecharMenu}
                alt="Icone de um X"
              />
            </div>
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
                <a href="/loja">GerminneBox</a>
              </li>
              <li>
                <a onClick={handleShowDropdown}>Profissionais</a>
                <ul
                  className={`${
                    showDropdown ? "showDropdown-Mobile" : "hideDropdown-Mobile"
                  }`}>
                  <li>
                    <a href="/contrate">Contrate</a>
                  </li>
                  <li>
                    <a href="/faca-parte">Faça Parte</a>
                  </li>
                </ul>
              </li>
              <li>Sobre nós</li>
            </ul>
          </nav>
        </div>

        <div className={menuOpen ? "esconder-menu-mobile" : "header-mobile"}>
          <div>
            <img onClick={handleMenu} src={menu} alt="iconeMenu-Mobile" />
          </div>

          <div className="header-box">
            <a href="/home">
              <img src={logo} alt="Logo verde" />
              <h1>Germinne</h1>
            </a>
          </div>

          <div className="box-sacola">
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
