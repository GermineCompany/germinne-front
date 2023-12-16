import React from 'react';
import post1 from '../../images/post1perfilhorticultor.svg';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './portifolioHorticultor.css';

function PortifolioHorticultor() {
  const navigate = useNavigate();

  return (

    <div className='main-container-limitador'>
      <div>
        <p className='botao-voltar-horticultores' onClick={() => navigate(-1)}><MdKeyboardBackspace /> Voltar</p>
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