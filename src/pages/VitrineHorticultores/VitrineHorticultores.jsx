import React from 'react';
import { useState } from 'react';
import './vitrineHorticultores.css';
import CardHorticultor from '../../components/CardHorticultor/CardHorticultor';
import Emanuel from '../../images/Emanuel.svg';
import Rafael from '../../images/Rafael.svg';
import Lidia from '../../images/Lidia.svg';
import imagemHorticultor from '../../images/horticultor-exemplo.png';

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

      <article className='box-horticultores main-container-limitador'>
        <CardHorticultor 
          srcImg={ Emanuel } 
          name='Emanuel da Silva Santos'
          description='Tenho 55 anos e sou formado em agronomia. Vim de uma família de agricultores e trabalho na área há 23 anos. Sou especialista em doenças e pragas.'
          rating='4,8'
        />

        <CardHorticultor 
          srcImg={ Rafael }
          name='Rafael Melo Campos '
          description='Trabalho com plantas faz 7 anos, e por ser Pai de plantas, vejo como o ambiente melhora! Estou disposto a melhorar ambiente de muitas pessoas nessa jornada de plantar e colher! Estou Disponível para ajudá-lo no que precisar '
          rating='4,8'
        />

        <CardHorticultor 
          srcImg={ Lidia }
          name='Lidia Mioto Dias '
          description='Sou do interior do Espírito Santo e moro em São Paulo há 5 anos. Trabalho com a agricultura nas horas vagas, aplicando todo o conhecimento que meu pai me passou, trabalhando com ele por 4 anos. Estou disponível para ajudá-lo no que for possível!.'
          rating='4,8'
        />

        <CardHorticultor 
          srcImg={ imagemHorticultor }
          name='Nice Lima Soares'
          description='Apaixonada pela diversidade de plantas, fiz um curso de horticultor orgânico em 2015 e estou na área desde então. Sou especialista em hortas verticais e em plantas trepadeiras.'
          rating='4,8'
        />

      </article>
    </div>
  );
}

export default VitrineHorticultores;