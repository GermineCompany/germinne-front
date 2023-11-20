import React from 'react';
import './Horticultores.css';
import '../../components/ArticleBeneficios/articleBeneficios.css';

import ComoFunciona from '../../components/ComoFunciona/ComoFunciona';
import ArticleBeneficios from '../../components/ArticleBeneficios/ArticleBeneficios';

import Passo1 from '../../images/Passo1.svg';
import Passo2 from '../../images/Passo2.svg';
import Passo3 from '../../images/Passo3.svg';
import Passo4 from '../../images/Passo4.svg';
import imgComoFunciona from '../../images/comoFunciona.svg';

import servico1 from '../../images/servico1.svg';
import servico2 from '../../images/servico2.svg';
import servico3 from '../../images/servico3.svg';



import { useState } from 'react';

function Horticultores() {
  const [CEP, setCEP] = useState('');

  const handleChange = (event) => setCEP(event.target.value);

  return (
    <div>
      
      <div className='banner-horticultor'>
        <div>
          <h2>Consulte agora um <span>profissional</span> e solicite um orçamento <span>gratuito</span>.</h2>

          <div className='box-inputs-horticultor'>
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
                name="largestRadius"
                value={CEP}
                onChange={handleChange}
                placeholder='Digite seu CEP'
              />
            </div>
          </div>

          <button>Consultar profissionais</button>
        </div>
      </div>

      <div className='box-como-funciona'>
        <img src={imgComoFunciona} alt="imgComoFunciona" />

        <section className='box-texto-como-funciona'>
          <h2>Como funciona?</h2>
          <ComoFunciona
            urlImg={Passo1}
            altImg="icone1"
            conteudo="Responda as questões sobre o tipo de trabalho, onde será feito e o tamanho aproximado do espaço."
          />

          <ComoFunciona
            urlImg={Passo2}
            altImg="icone2"
            conteudo="Acesse serviços de horticultura e tenha hortas facilmente acessíveis!"
          />

          <ComoFunciona
            urlImg={Passo3}
            altImg="icone3"
            conteudo="Entre em contato direto com o nosso parceiro através do WhatsApp ou Chat integrado na plataforma e feche os detalhes do serviço."
          />

          <ComoFunciona
            urlImg={Passo4}
            altImg="icone4"
            conteudo="Após aprovar o orçamento nosso parceiro vai realizar o serviço na data e local combinados. "
          />
        </section >

      </div>

      <div className='box-servicos'>

        <h2><span>Promovemos</span> diversos serviços:</h2>

        <div className='box-card-servicos-horticultores'>
          <ArticleBeneficios
            urlImg={servico1}
            altImg='Imgem de um homem plantando'
            title='Plantio e replantio'
            text='Se você sonha em transformar espaços inutilizados em deslumbrantes hortas orgânicas, nossa equipe está pronta para tornar isso realidade! O plantio e replantio ganham vida com o toque especial dos nossos especialistas, que não só cultivam plantas, mas criam ambientes vibrantes e cheios de vida.'
          />

          <ArticleBeneficios
            urlImg={servico2}
            altImg='Imagem de várias comidas em uma mesa'
            title='Controle de pragas e enfermidades'
            text='Nossos profissionais não apenas conhecem o significado de "Proteção" mas sim a linguagem secreta das plantas. Com expertise em controle de pragas e enfermidades, eles protegem seu jardim como guardiões dedicados.'
          />

          <ArticleBeneficios
            urlImg={servico3}
            altImg='Imagem de várias comidas em uma mesa'
            title='Manutenção e fertilização'
            text='Imagine uma Horta que sempre pareceu saído de uma revista de jardinagem - agora, pare de imaginar e comece a viver essa realidade! Com a manutenção e fertilização especializada dos nossos profissionais, seu espaço verde será constantemente nutrido e mimado.'
          />
        </div>

      </div>
    </div >

  );
}

export default Horticultores;
