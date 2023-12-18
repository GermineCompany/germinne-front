import React, { useEffect, useState } from 'react';
import estrelas from '../../images/stars.png';
import { MdVerified, MdOutlineWhatsapp } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import './perfilHorticultor.css';
import CardPerfilServico from '../../components/CardPerfilServico/CardPerfilServico';
import ImagemUltimosServicos from '../../components/ImagemUltimosServicos/ImagemUltimosServicos';
import post1 from '../../images/post1perfilhorticultor.svg';
import CarouselView from '../../components/CarouselView/CarouselView';
import { useParams } from 'react-router-dom';
import api from '../../utils/axios';

function PerfilHorticultor() {
  const { id } = useParams();
  const [horticultor, setHorticultor] = useState([]);
  const [horticultorRecebido, setHorticultorRecebido] = useState(false);

  const getHorticultor = async () => {
    try {
      const response = await api.get(`/profissional/${id}`);
      setHorticultor(response.data);
      setHorticultorRecebido(true);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getHorticultor();
    console.log(horticultor);
  }, [id]);
  return (
    <div className='main-container-limitador'>
      <div className='centralizador-box-perfil-horticultor'>
        <article className='box-perfil-horticultor'>
          <div className='box-nome-avaliacao-perfil'>
            <div>
              <img src={horticultor.imagemPerfil} alt="Foto do horticultor" />
              <p>{ `${horticultor.nome} ${horticultor.sobrenome}` }</p>
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
            <p>{ horticultor.biografia }</p>
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
        <h2>Últimos <span>trabalhos</span>!</h2>

        <div className='ultimos-servicos-desktop'>
          {
            horticultorRecebido && horticultor.profissionalTrabalhos.map((trabalho) => {
              const imagens = JSON.parse(trabalho.fotosTrabalho);
              return (
                <a key={trabalho.idTrabalho} href={`/portifolio-horticultor/${trabalho.idTrabalho}`}>
                  <ImagemUltimosServicos
                    key={trabalho.idTrabalho}
                    srcImg={imagens[0]}
                    titulo={trabalho.titulo}
                    local={trabalho.local}
                    texto={trabalho.descricao}
                  />
                </a>
              );
            })
          }
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