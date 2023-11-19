import React from 'react';
import './footer.css';
import logo from '../../images/logo-branco.svg';
import {  RiLinkedinBoxFill } from 'react-icons/ri';
import { SiLinktree } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa';





function Footer() {
  return (
    <footer>
      <div className='footer-box'>
        <div className='footer-logo'>
          <img className='LogoGerminne' src={ logo } alt="Logo da Germinne branco" />
          <h2>Germinne</h2>
        </div>
        <div className='redes'>
          <a href="https://www.instagram.com/germinne_oficial/">
            <FaInstagram className='footer-icons'/>
          </a>
          <a href="https://www.linkedin.com/in/vitormoutim/">
            <RiLinkedinBoxFill className='footer-icons'/>
          </a>
          <a href="https://www.linkedin.com/in/vitormoutim/">
            <SiLinktree className='footer-icons'/>
          </a>

        </div>
        <div className='Contatos'>
          <p href=""> <a className='ancoras'href=""> BLOG GERMINNE </a></p>
          <p href=""> <a className='ancoras'href=""> EMAIL </a></p>
          <p href=""> <a className='ancoras'href=""> TELEFONE </a></p>
          <p href=""> <a className='ancoras'href=""> SOBRE NÓS </a></p>
        </div>
        <div className='Site'>
          <p href=""> <a className='ancoras'href=""> SEGURANÇA </a></p>
          <p href=""> <a className='ancoras'href=""> TERMOS DE USO </a></p>
          <p href=""> <a className='ancoras'href=""> POLITICAS DE ENVIO </a></p>
          <p href=""> <a className='ancoras'href=""> PERGUNTAS FREQUENTES </a></p>
        </div>



      </div>





       
   
        
    </footer>
  );
}

export default Footer;