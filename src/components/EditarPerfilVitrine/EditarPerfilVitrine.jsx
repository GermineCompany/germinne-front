import React from 'react';
import './EditarPerfilVitrine.css';
import ServicoPerfilVitrine from '../ServicoPerfilVitrine/ServicoPerfilVitrine';
import GaleriaProjetos from '../GaleriaProjetos/GaleriaProjetos';

function EditarPerfilVitrine() {
  return (
    <section className='editar-perfil-vitrine'>
      <div>
        <h2>Edite seu perfil para o cliente</h2>
      </div>

      <div className='editar-dados-pessoais-vitrine'>
        <div>
          <div className='editar-foto-perfil-vitrine'>
            <img src="https://pbs.twimg.com/profile_images/1211669349142073344/E2AJDFae_400x400.jpg" alt="Foto de perfil" />
            <p>Altere sua foto de perfil</p>
          </div>

          <label htmlFor="nome">
            Nome de usuário
            <input placeholder='Digite seu nome' type="text" name="nome" id="nome" />
          </label>
        </div>

        <div>
          <label htmlFor="telefone">
            Telefone
            <input placeholder='(00) 1234-5678' type="text" name="telefone" id="telefone" />
          </label>

          <label htmlFor="whatsapp">
            WhatsApp
            <input placeholder='(00) 12345-5678' type="text" name="whatsapp" id="whatsapp" />
          </label>
        </div>
      </div>

      <hr />

      <div className='editar-info-horticultor-vitrine'>
        <div>
          <label htmlFor="sobre">
            Descrição do profissional
            <textarea placeholder='Fale um pouco mais sobre suas experiências' name="sobre" id="sobre" cols="35" rows="15" />
          </label>
        </div>

        <div>
          <div>
            <p>Áreas de atuação</p>
            <select>
              <option value="default" disabled selected>Selecione as regiões</option>
              <option value="plantio">Plantio</option>
              <option value="cultivo">Cultivo</option>
              <option value="manutencao">Manutenção</option>
              <option value="fertilizacao">Fertilização do solo</option>
              <option value="sistema de irrigacao">Sistema de irrigação</option>
              <option value="pragas">Controle de pragas</option>
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
          <GaleriaProjetos />
          <GaleriaProjetos />
          <GaleriaProjetos />
        </div>
      </div>
    </section>
  );
}

export default EditarPerfilVitrine;