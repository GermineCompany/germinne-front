import React, { useState } from "react";
import logo from "../../images/logo-verde.svg";
import sacola from "../../images/sacola.png";
import fecharMenu from "../../images/fechar-menu.png";
import "./headerMobile.css";
import "animate.css";

function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => setMenuOpen(menuOpen ? false : true);

  return (
    <>
      <div
        className={
          !menuOpen
            ? "esconder-menu-mobile animate__slideOutRight"
            : "menu-mobile animate__animated animate__slideInRight"
        }
      >
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
              src="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/fechar-menu.png"
              alt="Icone de um X"
            />
          </div>
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

      <header className={menuOpen ? "esconder-menu-mobile" : "header-mobile"}>
        <div>
          <p onClick={handleMenu}>&equiv;</p>
        </div>

        <div className="header-box">
          <img src={logo} alt="Logo verde" />
          <a href="/home">
            <h1>Germinne</h1>
          </a>
        </div>

        <div>
          <a href="/carrinho">
            <img
              src="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/sacola.png"
              alt="Sacola verde"
            />
          </a>
        </div>
      </header>
    </>
  );
}

export default HeaderMobile;
