import React, { useContext, useEffect, useState } from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './portifolioHorticultor.css';
import { useParams } from 'react-router-dom';
import GerminneContext from '../../context/GerminneContext';
import api from '../../utils/axios';

function PortifolioHorticultor() {
  const { id } = useParams();
  const { loggedUser: { id:idUser } } = useContext(GerminneContext);
  const navigate = useNavigate();
  const [trabalhoHorticultor, setTrabalhoHorticultor] = useState({});
  const [horticultorRecebido, setHorticultorRecebido] = useState(false);

  const getHorticultor = async () => {
    try {
      const response = await api.get(`/profissional/${id}`);
      console.log(response.data);
      const trabalho = response.data.profissionalTrabalhos.filter(({ idTrabalho }) => idTrabalho == id);
      trabalho[0].fotosTrabalho = JSON.parse(trabalho[0].fotosTrabalho);
      setTrabalhoHorticultor(trabalho[0]);
      setHorticultorRecebido(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHorticultor();
  }, [idUser]);

  return (

    <div className='main-container-limitador'>
      <div>
        <p className='botao-voltar-horticultores' onClick={() => navigate(-1)}><MdKeyboardBackspace /> Voltar</p>
      </div>

      <section className='descricao-portifolio'>
        <h2> {trabalhoHorticultor.titulo}</h2>
        <p>{ trabalhoHorticultor.descricao }</p>
      </section>

      <div className='data-publicacao-portifolio'>
        <p>{ trabalhoHorticultor.local }</p>
        <hr />
      </div>

      <article className='box-imagens-portifolio'>
        <h2>Galeria do <span>projeto</span></h2>
        <div className='imagens-portifolio'>
          {
            horticultorRecebido && trabalhoHorticultor.fotosTrabalho.map((url, index) => {
              return (
                <img key={ index } src={url} alt="Imagem de um serviço do horticultor" />
              );
            })
          }
        </div>
      </article>

      <hr />
    </div >
  );
}

export default PortifolioHorticultor;