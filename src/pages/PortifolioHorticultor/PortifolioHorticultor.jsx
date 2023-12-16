import React from 'react';


import imagemHorticultor from '../../images/horticultor-exemplo.png';
import estrelas from '../../images/stars.png';
import { MdVerified, MdOutlineWhatsapp } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import post1 from '../../images/post1perfilhorticultor.svg';

import './portifolioHorticultor.css';

function PortifolioHorticultor() {
  return (

    <div className='main-container-limitador'>
      <div className='centralizador-box-perfil-horticultor'>
        <article className='box-perfil-horticultor'>
          <div className='box-nome-avaliacao-perfil'>
            <div>
              <img src={imagemHorticultor} alt="Foto do horticultor" />
              <p>Nice Lima Soares</p>
            </div>

            <div>
              <p>Avaliações</p>
              <div>
                <p>4.0</p>
                <img src={estrelas} alt="Imagem de estrelas" />
              </div>
            </div>

            <div>
              <p><MdVerified /> Profissional verificado</p>
              <p>Cadastrado desde: 07/2023</p>
            </div>
          </div>

          <div className='box-sobre-mim-perfil'>
            <h2>Sobre mim</h2>
            <p>Trabalho com plantas faz 7 anos, e por ser Pai de plantas, vejo como o ambiente melhora! Estou disposto a melhorar ambiente de muitas pessoas nessa jornada de plantar e colher! Estou Disponível para ajudá-lo no que precisar </p>
          </div>

          <div className='box-contatos-perfil'>
            <button>Solicitar orçamento</button>
            <button><MdOutlineWhatsapp /> WhatsApp </button>
            <button><FaPhoneAlt /> Telefone </button>
          </div>

        </article>
      </div>

      <section className='descricao-portifolio'>
        <h2>Hortas em centros <span>comunitários</span></h2>
        <p>Bustando incentivar as ações de horticultúra para as crianças, iremos cultivar hortas em centros comunitários e lares de idosos, onde serão colocadas em áreas abartes , possibilitando o contato das crianças com as hortas, e trazendo atividades que vão ajudar a saúde dos idosos.</p>
      </section>

      <div className='data-publicacao-portifolio'>
        <p>São Paulo - SP | Av. Paulista</p>
        <hr />
      </div>

      <article className='box-imagens-portifolio'>
        <h2>Galeria do <span>projeto</span></h2>
        <div className='imagens-portifolio'>
          <img src={post1} alt="" />
          <img src={post1} alt="" />
          <img src={post1} alt="" />
          <img src={post1} alt="" />
          <img src={post1} alt="" />
          <img src={post1} alt="" />
        </div>
      </article>

      <hr />

      <section className='box-ultimos-projetos'>
        <h2>Outros <span>projetos</span> do mesmo profissional</h2>

        <div className='ultimos-projetos'>
          <div>

            <a href="">
              <div>
                <img src={post1} alt="" />
              </div>

              <h3>Criando vidas verdes</h3>
              <p>Efetuado em 2021</p>
            </a>

          </div>
          <div>

            <a href="">
              <div>
                <img src={post1} alt="" />
              </div>
              <h3>Teto verde Eldorado</h3>
              <p>Efetuado em 2020</p>
            </a>
            
          </div>
        </div>
      </section>
    </div >
  );
}

export default PortifolioHorticultor;