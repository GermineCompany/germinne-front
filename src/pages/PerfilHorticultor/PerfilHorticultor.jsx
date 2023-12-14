import React from 'react';
import imagemHorticultor from '../../images/horticultor-exemplo.png';
import estrelas from '../../images/stars.png';
import { MdVerified, MdOutlineWhatsapp } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import './perfilHorticultor.css';
import CardPerfilServico from '../../components/CardPerfilServico/CardPerfilServico';
import ImagemUltimosServicos from '../../components/ImagemUltimosServicos/ImagemUltimosServicos';
import post1 from '../../images/post1perfilhorticultor.svg';
import CarouselView from '../../components/CarouselView/CarouselView';

function PerfilHorticultor() {
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
      <div className='box-servicos-oferecidos'>
        <h3><span>Serviços</span> oferecidos: </h3>

        <div>
          <CardPerfilServico service='Fertilização do solo' />
          <CardPerfilServico service='Manutenção' />
          <CardPerfilServico service='Plantio' />
          <CardPerfilServico service='Sistema de irrigação' />
          <CardPerfilServico service='Controle de pragas' />
        </div>
      </div>

      <hr />

      <div className='box-ultimos-servicos'>
        <h2>Últimos <span>Trabalhos</span>!</h2>

        <div className='ultimos-servicos-desktop'>
          <ImagemUltimosServicos
            srcImg={post1}
            titulo='Horticultura nas escolas'
            local='Cotia - SP | Granja Viana'
            texto='Os ensinos em escolas estão ficando cada vez mais tecnológicos, então tivemos a iniciativa de nos virar para o lado do conta...'
          />

          <ImagemUltimosServicos
            srcImg={post1}
            titulo='Horticultura nas escolas'
            local='Cotia - SP | Granja Viana'
            texto='Os ensinos em escolas estão ficando cada vez mais tecnológicos, então tivemos a iniciativa de nos virar para o lado do conta...'
          />

          <ImagemUltimosServicos
            srcImg={post1}
            titulo='Horticultura nas escolas'
            local='Cotia - SP | Granja Viana'
            texto='Os ensinos em escolas estão ficando cada vez mais tecnológicos, então tivemos a iniciativa de nos virar para o lado do conta...'
          />


          <ImagemUltimosServicos
            srcImg={post1}
            titulo='Horticultura nas escolas'
            local='Cotia - SP | Granja Viana'
            texto='Os ensinos em escolas estão ficando cada vez mais tecnológicos, então tivemos a iniciativa de nos virar para o lado do conta...'
          />

          <ImagemUltimosServicos
            srcImg={post1}
            titulo='Horticultura nas escolas'
            local='Cotia - SP | Granja Viana'
            texto='Os ensinos em escolas estão ficando cada vez mais tecnológicos, então tivemos a iniciativa de nos virar para o lado do conta...'
          />

          <ImagemUltimosServicos
            srcImg={post1}
            titulo='Horticultura nas escolas'
            local='Cotia - SP | Granja Viana'
            texto='Os ensinos em escolas estão ficando cada vez mais tecnológicos, então tivemos a iniciativa de nos virar para o lado do conta...'
          />
        </div>

        <div className='ultimos-servicos-mobile'>
          <CarouselView
            componente1={
              <ImagemUltimosServicos
                srcImg={post1}
                titulo='Horticultura nas escolas'
                local='Cotia - SP | Granja Viana'
                texto='Os ensinos em escolas estão ficando cada vez mais tecnológicos, então tivemos a iniciativa de nos virar para o lado do conta...'
              />
            }
            componente2={
              <ImagemUltimosServicos
                srcImg={post1}
                titulo='Horticultura nas escolas'
                local='Cotia - SP | Granja Viana'
                texto='Os ensinos em escolas estão ficando cada vez mais tecnológicos, então tivemos a iniciativa de nos virar para o lado do conta...'
              />
            }
            componente3={
              <ImagemUltimosServicos
                srcImg={post1}
                titulo='Horticultura nas escolas'
                local='Cotia - SP | Granja Viana'
                texto='Os ensinos em escolas estão ficando cada vez mais tecnológicos, então tivemos a iniciativa de nos virar para o lado do conta...'
              />
            }
            componente4={
              <ImagemUltimosServicos
                srcImg={post1}
                titulo='Horticultura nas escolas'
                local='Cotia - SP | Granja Viana'
                texto='Os ensinos em escolas estão ficando cada vez mais tecnológicos, então tivemos a iniciativa de nos virar para o lado do conta...'
              />

            }
            componente5={
              <ImagemUltimosServicos
                srcImg={post1}
                titulo='Horticultura nas escolas'
                local='Cotia - SP | Granja Viana'
                texto='Os ensinos em escolas estão ficando cada vez mais tecnológicos, então tivemos a iniciativa de nos virar para o lado do conta...'
              />

            }
            componente6={
              <ImagemUltimosServicos
                srcImg={post1}
                titulo='Horticultura nas escolas'
                local='Cotia - SP | Granja Viana'
                texto='Os ensinos em escolas estão ficando cada vez mais tecnológicos, então tivemos a iniciativa de nos virar para o lado do conta...'
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default PerfilHorticultor;