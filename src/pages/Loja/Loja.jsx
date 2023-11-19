import React from 'react';
import CardPerguntas from '../../components/CardPerguntas/CardPerguntas';
import './loja.css';


function Loja() {
  return (

    

    <div className='box-card-pergunta'>
      
      <CardPerguntas 
        title='Quantas horas de sol por dia minha planta precisa?'
        text='Para que suas plantinhas tenham o desenvolvimento ideal, você vai precisar de pelo menos 4 horas de sol direto ao dia, e não basta ser só aquela claridade, é necessário que realmente a luz do sol incidir diretamente sobre sua hortinha.'  
      />
      <hr />
      <CardPerguntas  
        title='Quanto tempo leva para germinar?'  
        text='Vai depender do tipo da semente. Disponibilizamos em nosso blog informações completinhas sobre diversas plantas, confira aqui.'
      />
      <hr />
      <CardPerguntas  
        title='Preciso regar?' 
        text='Nosso kit conta com um sistema de autoirrigação, que facilita o cuidado das plantas ao fornecer água de forma automática. Então se você tem pouco tempo disponível para regar plantas ou se não têm experiência prévia no cultivo não se preocupe, nosso kit não precisa de maiores trabalhos :)'  
      />
    </div>
  );
}

export default Loja;
