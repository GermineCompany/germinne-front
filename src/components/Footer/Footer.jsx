import React from "react";
import "./footer.css";
import logo from "../../images/logo-branco.svg";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { SiLinktree } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-box">
        <div>
          <div className="footer-logo">
            <img src={logo} alt="Logo da Germinne branco" />
            <h2>Germinne</h2>
          </div>

          <div className="redes">
            <a href="https://www.instagram.com/germinne_oficial/">
              <FaInstagram className="footer-icons" />
            </a>
            <a href="https://www.linkedin.com/in/vitormoutim/">
              <RiLinkedinBoxFill className="footer-icons" />
            </a>
            <a href="https://www.linkedin.com/in/vitormoutim/">
              <SiLinktree className="footer-icons" />
            </a>
          </div>
        </div>

        <div>
          <ul>
            <li>
              <a href="">BLOG GERMINNE</a>
            </li>
            <li>
              <a href="">EMAIL</a>
            </li>
            <li>
              <a href="">TELEFONE</a>
            </li>
            <li>
              <a href="">SOBRE NÓS</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="">SEGURANÇA</a>
            </li>
            <li>
              <a href="">TERMOS DE USO</a>
            </li>
            <li>
              <a href="">POLITICAS DE ENVIO</a>
            </li>
            <li>
              <a href="">PERGUNTAS FREQUENTES</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
