import React, { useContext, useEffect, useState } from 'react';
import './editarPerfilVitrine.css';
import ServicoPerfilVitrine from '../ServicoPerfilVitrine/ServicoPerfilVitrine';
import GaleriaProjetos from '../GaleriaProjetos/GaleriaProjetos';
import GerminneContext from '../../context/GerminneContext';
import api from '../../utils/axios';

function EditarPerfilVitrine() {
  const { loggedUser: { id } } = useContext(GerminneContext);
  const [userInfo, setUserInfo] = useState({
    email: '',
    telefone: '',
    celular: '',
    biografia: '',
  });
  const [statusAtualizacao, setStatusAtualizacao] = useState('');

  const getHorticultorInfos = async () => {
    const result = await api.get(`/profissional/${id}`);

    setUserInfo({
      email: result.data.email,
      telefone: result.data.telefone,
      celular: result.data.celular,
      biografia: result.data.biografia,
    });
  };

  useEffect(() => {
    getHorticultorInfos();
  }, [id]);

  const handleAtualizarInfo = async () => {
    try {
      const result = await api.put(`/profissional/${id}`, userInfo);
      setStatusAtualizacao(result.data.message);
      window.location.href = '/perfil';
      // navigate('/perfil');
      // setTimeout(() => navigate('/perfil'), 1500);
    } catch(error) {
      console.log(error);
    }
  };

  const handleChange = (event) => setUserInfo({ ...userInfo, [event.target.id]: event.target.value });

  return (
    <section className='editar-perfil-vitrine'>
      <div>
        <h2>Edite seu <span>perfil</span> para o <span>cliente</span></h2>
      </div>

      <div className='editar-dados-pessoais-vitrine'>
        <div>
          <div className='editar-foto-perfil-vitrine'>
            <img src="https://pbs.twimg.com/profile_images/1211669349142073344/E2AJDFae_400x400.jpg" alt="Foto de perfil" />
            <p>Altere sua foto de perfil</p>
          </div>

          <label htmlFor="nome">
            Email
            <input 
              placeholder={userInfo.email || 'Digite seu email...'}
              value={userInfo.email}
              type="text"
              name="email" 
              id="email"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="telefone">
            Telefone
            <input 
              placeholder={userInfo.telefone || 'Digite seu telefone...'}
              value={userInfo.telefone}
              type="text" 
              name="telefone"
              id="telefone"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="celular">
            Celular
            <input 
              placeholder={userInfo.celular || 'Digite seu celular...'}
              value={userInfo.celular}
              type="text" 
              name="celular" 
              id="celular"
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <hr />

      <div className='editar-info-horticultor-vitrine'>
        <div>
          <label htmlFor="biografia">
            Descrição do profissional
            <textarea 
              placeholder={userInfo.biografia || 'Digite uma breve descrição sobre você...'}
              name="biografia" 
              id="biografia" 
              cols="35" 
              rows="15"
              onChange={handleChange}
              value={userInfo.biografia}
            />
          </label>
        </div>

        <div>
          <div>
            <p>Áreas de atuação</p>
            <select>
              <option value="default" disabled selected>Selecione as regiões</option>
              <option value="Mogi das Cruzes">Mogi das Cruzes</option>
              <option value="São Paulo Capital">São Paulo Capital</option>
              <option value="Taboão da Serra">Taboão da Serra</option>
              <option value="São Bernardo">São Bernardo</option>
              <option value="Mauá">Mauá</option>
              <option value="Santo André">Santo André</option>
            </select>
          </div>
          
          <div>
            <ServicoPerfilVitrine text='São Paulo Capital' />
            <ServicoPerfilVitrine text='Diadema' />
            <ServicoPerfilVitrine text='Taboão da Serra' />
          </div>
        </div>
      </div>

      <div className='servicos-que-atende-perfil'>
        <p>Serviços que atende</p>

        <select>
          <option value="default" disabled selected>Selecione o tipo de serviço</option>
          <option value="plantio">Plantio</option>
          <option value="cultivo">Cultivo</option>
          <option value="manutencao">Manutenção</option>
          <option value="fertilizacao">Fertilização do solo</option>
          <option value="sistema de irrigacao">Sistema de irrigação</option>
          <option value="pragas">Controle de pragas</option>
        </select>

        <div className='box-servicos-perfil'>
          <ServicoPerfilVitrine text='Plantio' />
          <ServicoPerfilVitrine text='Manutenção' />
          <ServicoPerfilVitrine text='Sistema de irrigação' />
        </div>
      </div>

      <hr />

      <div className='box-galeria-projetos'>
        <p>Galeria de projetos</p>

        <div>
          <div>
            <GaleriaProjetos />
            <GaleriaProjetos />
            <GaleriaProjetos />
          </div>

          <div>
            <p className='status-atualizar-perfil-profissional'>{ statusAtualizacao }</p>
            <button 
              className='button-solicitar-verificacao'
              onClick={handleAtualizarInfo}
            >Atualizar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditarPerfilVitrine;