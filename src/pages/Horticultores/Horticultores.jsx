import React from 'react';
import './Horticultores.css';
import ComoFunciona from '../../components/ComoFunciona/ComoFunciona';
import Passo1 from '../../images/Passo1.svg';
import Passo2 from '../../images/Passo2.svg';
import Passo3 from '../../images/Passo3.svg';
import Passo4 from '../../images/Passo4.svg';
import imgComoFunciona from '../../images/comoFunciona.svg';

function Horticultores() {
  return (

    <div className='box-como-funciona'>

      
      <img src={imgComoFunciona} alt="imgComoFunciona" />
      
      <div className='box-texto-como-funciona'>
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


      </div>
    </div>
  );
}

export default Horticultores;

