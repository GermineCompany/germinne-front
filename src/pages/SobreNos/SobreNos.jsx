import React from 'react';
import CardSobreNos from '../../components/CardSobreNos/CardSobreNos';
import missao from '../../images/missao.svg';
import visao from '../../images/visao.svg';
import valor from '../../images/valor.svg';
import './sobreNos.css';
import { MdOutlineEmail, MdOutlineWhatsapp } from 'react-icons/md';
import FormsSobreNos from '../../components/FormsSobreNos/FormsSobreNos';

function SobreNos() {
  return (
      <div className="box-text-sobre-nos">
        <h3>Sobre nós</h3>
        <p>
          A Germinne surgiu com o objetivo de incentivar cada vêz mais pessoas
          parte de um movimento que transforma os espaços urbanos em fontes de
          vida e saúde. Nossa plataforma promove informações e incentiva
          iniciativas que promovam a agricultura urbana: Leia os mais diversos
          artigos em nosso blog, converse com nosso chatbot inteligente que irá
          te orientar e ajudar a resolver os seus problemas, invista em nosso
          kit de cultivo indoor e plante em qualquer lugar de maneira
          simplificada.
        </p>

        <p>
          Temos como objetivo tornar a agricutura urbana mais acessível,
          inclusiva e produtiva para todos.
        </p>
      </div>
  );
}

export default SobreNos;
