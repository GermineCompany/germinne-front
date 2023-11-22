import React from 'react';
import './filtrosServico.css';
import CheckboxFiltro from '../../components/CheckboxFiltro/CheckboxFiltro';
import ImagensTerreno from '../../components/ImagensTerreno/ImagensTerreno';
import { useState } from 'react';

function FiltrosServico() {
  const [textarea, setTextarea] = useState('');

  const handleChange = (event) => setTextarea(event.target.value);

  return (
    <div>
      <div className='banner-filtros-servico'>
        <h2>Precisamos de mais <span>alguns detalhes</span> sobre o serviço</h2>
        <p>Preencha o rápido questionário para ajudar nosso parceiro a entender sua nescessidade</p>
      </div>

      <article className='box-filtros-servico'>
        <div>
          <h4>Qual o tamanho aproximado do espaço?</h4>
          <CheckboxFiltro value='pequeno' label='Pequeno (Até 50m²)'/>
          <CheckboxFiltro value='medio' label='Médio (De 50m² a 100m²)'/>
          <CheckboxFiltro value='grande' label='Grande (De 100m² a 200m²)'/>
          <CheckboxFiltro value='muito-grande' label='Muito Grande (200m² ou mais)'/>
        </div>

        <div>
          <h4>Qual o tipo de local do serviço?</h4>
          <CheckboxFiltro value='casa' label='Casa'/>
          <CheckboxFiltro value='comercio' label='Comércio'/>
          <CheckboxFiltro value='predio' label='Condomínio ou Prédio'/>
          <CheckboxFiltro value='escola' label='Escola...(*)'/>
          <CheckboxFiltro value='outro' label='Outro'/>
        </div>

        <div>
          <h4>Quando você pretende realizar o serviço?</h4>
          <CheckboxFiltro value='rapido' label='O quanto antes possível'/>
          <CheckboxFiltro value='7dias' label='Nos próximos 7 dias'/>
          <CheckboxFiltro value='15dias' label='Nos próximos 15 dias'/>
          <CheckboxFiltro value='30dias' label='Nos próximos 30 dias'/>
          <CheckboxFiltro value='semData' label='Não tenho data definida'/>
        </div>

        <div className='box-imagens-terreno'>
          <h3>Mande algumas imagens do terreno para o Horticultor</h3>
          <div>
            <ImagensTerreno />
            <ImagensTerreno />
            <ImagensTerreno />
            <ImagensTerreno />
            <ImagensTerreno />
          </div>
        </div>

        <div>
          <h3>Detalhe sua necessidade</h3>
          <textarea 
            value={textarea} 
            onChange={handleChange}
            placeholder='Por favor, traga um resumo e qualquer detalhe que achar necessários sobre o que busca e oque espera do serviço.'
          />
        </div>

        <div>
          <button>Solicitar orçamento</button>
        </div>
      </article>
    </div>
  );
}

export default FiltrosServico;