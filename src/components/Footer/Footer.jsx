import React from 'react';
import './footer.css';
import logo from '../../images/logo-branco.svg';
import { HiLocationMarker, HiPhone } from 'react-icons/hi';
import { RiWhatsappFill, RiInstagramFill, RiLinkedinBoxFill } from 'react-icons/ri';



function Footer() {
  return (
    <footer>
      <div className='footer-box'>
        <div className='footer-logo'>
          <img src={ logo } alt="Logo da Germinne branco" />
          <h2>Germinne</h2>
        </div>

        <div>
          <div className='footer-info'>
            <HiLocationMarker className='footer-icons'/>
            <p>R. Tito, 54 - Vila Romana, São Paulo - SP, 05051-000</p>
          </div>

          <div className='footer-box-contatos'>
            <div className='footer-info'>
              <HiPhone className='footer-icons'/>
              <p>(11) 2888-5500</p> 
            </div>
            <div className='footer-info'>
              <RiWhatsappFill className='footer-icons'/>
              <p>(11) 2888-5500</p>
            </div>
          </div>

          <div className='footer-info'>
            <p>Midias sociais: </p>
            <a href="https://www.instagram.com/germinne_oficial/">
              <RiInstagramFill className='footer-icons'/>
            </a>

            <a href="https://www.linkedin.com/in/vitormoutim/">
              <RiLinkedinBoxFill className='footer-icons'/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;