import React from 'react';
import { useState } from 'react';
import './vitrineHorticultores.css';

function VitrineHorticultores() {
  const [CEP, setCEP] = useState('');

  const handleChange = (event) => setCEP(event.target.value);

  return (
    <div className='box-vitrine-horticultores'>
      <div className='box-introducao-vitrine'>
        <h2>Escolha dentre nossos parceiros disponíveis e inicie já um orçamento. </h2>
        <p>É rápido, gratuito e sem sair de casa</p>

        <div className='box-inputs-vitrine'>
          <div>
            <div>
              <select>
                <option value="default" disabled selected>Selecione o tipo de serviço</option>
                <option value="plantio">Plantio</option>
                <option value="cultivo">Cultivo</option>
                <option value="pragas">Controle de pragas</option>
              </select>
            </div>

            <div>
              <input
                type="number"
                name="CEP"
                value={CEP}
                onChange={handleChange}
                placeholder='Digite seu CEP'
              />
            </div>
          </div>

          <div>
            <button>Consultar profissionais</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VitrineHorticultores;