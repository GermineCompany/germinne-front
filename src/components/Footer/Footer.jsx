import React from 'react';
import './footer.css';
import logo from '../../images/logo-branco.svg';
import waveFooter from '../../images/wave-footer.svg';
import { FaInstagramSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { SlLocationPin } from 'react-icons/sl';
import { MdEmail } from 'react-icons/md';
import { FaPhoneVolume } from 'react-icons/fa6';
import { useState } from 'react';

function Footer() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdown = () => {
    setShowDropdown(showDropdown ? false : true);
    console.log('clicou');
  };

  return (
    <footer>
      <div className="footer-infos">
        <div className="footer-logo">
          <div>
            <img src={logo} alt="Logo da Germinne branco" />
            <h2>GERMINNE</h2>
          </div>
          <div>
            <FaInstagramSquare />
            <FaLinkedin />
            <FaGithubSquare />
          </div>
        </div>

        <div>
          <h3>Links rápidos</h3>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/loja">Germinnne Box</a>
            </li>
            <li>
              <a
                className="hover-poniter-profissionais"
                onClick={handleShowDropdown}>
                Profissionais
              </a>
              <ul
                className={` ${showDropdown ? 'showDropdown-footer' : 'hideDropdown-footer'
                  }`}>
                <li>
                  <a href="/contrate">Contrate</a>
                </li>
                <li>
                  <a href="/faca-parte">Faça parte</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h3>Blog</h3>

          <ul>
            <li>
              <a href="/#">Horta em casa</a>
            </li>
            <li>
              <a href="/#">Benefícios da horta</a>
            </li>
            <li>
              <a href="/#">Salada russa</a>
            </li>
            <li>
              <a href="/#">Telhado verde</a>
            </li>
          </ul>
        </div>

        <div className="footer-contatos">
          <h3>Contatos</h3>

          <div>
            <p>
              <SlLocationPin /> R. Tito, 54 - Vila Romana, São Paulo - SP
            </p>
            <p>
              <MdEmail /> germinecompany@gmail.com
            </p>
            {/*             <p>
              <FaPhoneVolume /> (11) 1234-5678
            </p> */}
          </div>
        </div>
      </div>

      {/* <div> */}
      <img className="onde-footer" src={waveFooter} alt="Wave footer" />
      {/* </div> */}
    </footer>
  );
}

export default Footer;
