import React from 'react';
import CardSobreNos from '../../components/CardSobreNos/CardSobreNos';
import missao from '../../images/missao.svg';
import visao from '../../images/visao.svg';
import valor from '../../images/valor.svg';
import './sobreNos.css';

function SobreNos() {
  return (
    <article>
      <div>
        <h3>Sobre nós</h3>
        <p>A Germine surgiu com o objetivo de incentivar cada vêz mais pessoas parte de um movimento que transforma os espaços urbanos em fontes de vida e saúde. Nossa plataforma promove informações e incentiva iniciativas que promovam a agricultura urbana: Leia os mais diversos artigos em nosso blog, converse com nosso chatbot inteligente que irá te orientar e ajudar a resolver os seus problemas, invista em nosso kit de cultivo indoor e plante em qualquer lugar de maneira simplificada.
        </p>

        <p>Temos como objetivo tornar a agricutura urbana mais acessível, inclusiva e produtiva para todos.</p>
      </div>

      <div className='box-sobre-nos'>
        <CardSobreNos
          srcImg={ missao }
          altImg='Icone do missão'
          title='Missão'
          text='A nossa missão é promover e democratizar a agricultura urbana, fornecendo informações e práticas corretas.'
        />
        <CardSobreNos
          srcImg={ visao }
          altImg='Icone da visão'
          title='Visão'
          text='A nossa missão é promover e democratizar a agricultura urbana, fornecendo informações e práticas corretas.'
        />
        <CardSobreNos
          srcImg={ valor }
          altImg='Icone do valor'
          title='Valor'
          text='Ética, confiança, sustentabilidade, comprometimento, informações de qualidade e eficiência.'
        />
      </div>
    </article>
  );
}

export default SobreNos;