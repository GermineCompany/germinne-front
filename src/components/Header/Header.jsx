import React from "react";
import logo from "../../images/logo-verde.svg";
import sacola from "../../images/sacola.png";
import "./header.css";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const { pathname } = useLocation();

  const handleShowLogin = () => {
    setShowLogin(showLogin ? false : true);
  };

  return (
    <>
      <HeaderMobile id="component-mobile" />

      <header className="header-desktop">
        <div>
          <div className="box-logo-nome">
            <img src={logo} alt="Logo verde" />
            <a href="/">
              <h1>GERMINNE</h1>
            </a>
          </div>

          <nav>
            <ul>
              <li className="nav-item">
                <a href="/">
                  Inicio
                  <div
                    className={` underline  ${
                      pathname == "/" ? "hold-underline" : ""
                    }`}
                  />
                </a>
              </li>

              <li className="nav-item">
                <a href="/blog">
                  Blog
                  <div
                    className={` underline  ${
                      pathname == "/blog" ? "hold-underline" : ""
                    }`}
                  />
                </a>
              </li>

              <li className="nav-item">
                <a href="/loja">
                  GerminneBox
                  <div
                    className={` underline  ${
                      pathname == "/loja" ? "hold-underline" : ""
                    }`}
                  />
                </a>
              </li>

              <li className={" nav-item profissionais "}>
                <a href="">Profissionais</a>
                <div className="dropdown-horticultores">
                  <a href="/contrate">Contrate</a>
                  <a href="/faca-parte">Faça parte</a>
                </div>
              </li>

              <li className="nav-item">
                <a href="/sobre-nos">
                  Sobre nós
                  <div
                    className={` underline  ${
                      pathname == "/sobre-nos" ? "hold-underline" : ""
                    }`}
                  />
                </a>
              </li>
            </ul>
          </nav>

          <div className="box-login">
            <div>
              <button
                className={showLogin ? "button-opened" : ""}
                onClick={handleShowLogin}>
                Entrar
              </button>

              <div
                className={`links-login ${
                  showLogin ? "open-login" : "close-login"
                }`}>
                <ul>
                  <li>
                    <a href="/login-cliente">Cliente</a>
                  </li>
                  <li>
                    <a href="/login">Profissional</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="box-icone-sacola">
              <a href="/carrinho">
                <img src={sacola} alt="Icone de sacola" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
