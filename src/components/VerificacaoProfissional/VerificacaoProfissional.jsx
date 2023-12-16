import React, { useState } from 'react';
import './verificacaoProfissional.css';
import GaleriaProjetos from '../GaleriaProjetos/GaleriaProjetos';
import { PiFilePdfDuotone } from 'react-icons/pi';

function VerificacaoProfissional() {
  const [infos, setInfos] = useState({
    nome: '',
    cep: '',
    cpf: '',
    endereco: '',
    rg: '',
    telefone: ''
  });

  const handleChange = (event) => setInfos({ ...infos, [event.target.id]: event.target.value });
  return (
    <div className='verificacao-profissional'>
      <h2>Solicite sua <span>verificação</span>:</h2>

      <div className='box-inputs-verificacao-profissional'>
        <div>
          <label htmlFor="nome">
            Nome
            <input
              placeholder='Informe seu nome...' 
              onChange={handleChange}
              value={infos.nome}
              type="text"
              name="nome" 
              id="nome" 
            />
          </label>

          <label htmlFor="cep">
            CEP
            <input
              placeholder='Informe seu CEP...' 
              onChange={handleChange}
              value={infos.cep}
              type="text"
              name="cep" 
              id="cep" 
            />
          </label>
        </div>

        <div>
          <label htmlFor="cpf">
            CPF
            <input
              placeholder='Informe seu CPF...' 
              onChange={handleChange}
              value={infos.cpf}
              type="text"
              name="cpf" 
              id="cpf" 
            />
          </label>

          <label htmlFor="endereco">
            Endereço
            <input
              placeholder='Informe seu endereço...' 
              onChange={handleChange}
              value={infos.endereco}
              type="text"
              name="endereco" 
              id="endereco" 
            />
          </label>
        </div>

        <div>
          <label htmlFor="rg">
            RG
            <input
              placeholder='Informe seu RG...' 
              onChange={handleChange}
              value={infos.rg}
              type="text"
              name="rg" 
              id="rg" 
            />
          </label>

          <label htmlFor="telefone">
            Telefone
            <input
              placeholder='Informe seu telefone...'
              onChange={handleChange}
              value={infos.telefone}
              type="text"
              name="telefone"
              id="telefone"
            />
          </label>
        </div>
      </div>

      <div className='box-certificados-na-area'>
        <div>
          <h4>Certificados relevantes na área:</h4>
          <div className='box-certificados'>
            <div className='div-galeria-projetos'>
              <div className='galeria-projetos'>
                <PiFilePdfDuotone />
              </div>
              <p>Certificado Agricul...</p>
            </div>
            <GaleriaProjetos />
            <GaleriaProjetos />
          </div>
        </div>

        <div>
          <button>Solicitar</button>
        </div>
      </div>
    </div>
  );
}

export default VerificacaoProfissional;