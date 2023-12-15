import React from 'react';
import './sobreNos.css';
import CardValores from '../../components/CardValores/CardValores';
import FuturoSobreNos from '../../components/FuturoSobreNos/FuturoSobreNos';

function SobreNos() {
  return (
    <div>
      <div className='banner-sobre-nos'>
        <p><span>Conheça</span> a Germinne</p>
      </div>

      <div className='main-container-limitador box-sobre-a-germinne'>
        <p>Bem-vindo à <span>Germinne</span>, um lugar onde a paixão pela natureza e a dedicação à vida urbana se encontram. Somos apaixonados por tornar a <span>gricultura urbana acessível</span> a todos, oferecendo <span>soluções práticas</span> para transformar o desejo de cultivar em uma realidade vibrante.</p>
        <p>Nosso compromisso vai além do cultivo; é sobre capacitar cada indivíduo a <span>colher os beneficios de uma horta em casa</span>, independente de sua experiência ou espaço disponível. Com uma <span>equipe dedicada</span> e uma visão orientada para a <span>sustentabilidade</span>, estamos aqui para tornar sua jornada de cultivo uma experiência prazerosa e gratificante. </p>
        <p>Junte-se a nós nessa de <span>cultivar vida, saúde e sustentabilidade</span> no coração das cidades. Seja parte da comunidade <span>Germinne</span> e descubra o poder de cultivar seu próprio pedaço de verde no mundo urbano.</p>
      </div>

      <div className='main-container-limitador box-cards-valores'>
        <CardValores
          srcImg='https://germinnecomp-img.s3.sa-east-1.amazonaws.com/cultivo-sobre-nos.png'
          titulo='Cultivo'
          descricao='A nossa missão é democratizar a agricultura urbana, fornecendo informações corretas e práticas junto com um profissional, para que todos possam ter acesso a alimentos frescos e saudáveis.'
        />

        <CardValores
          srcImg='https://germinnecomp-img.s3.sa-east-1.amazonaws.com/colheita-sobre-nos.png'
          titulo='Colheita'
          descricao='Ser a principal plataforma de informações, serviço de horticultura e vendas de produtos que incentivam as hortas urbanas, reconhecida pela sua contribuição para a sustentabilidade e bem-estar das pessoas.'
        />

        <CardValores
          srcImg='https://germinnecomp-img.s3.sa-east-1.amazonaws.com/nutrientes-sobre-nos.png'
          titulo='Nutrientes'
          descricao='Ética; Confiança; Sustentabilidade; Comprometimento; Informações de Qualidade; Eficiência; Tecnologia;'
        />
      </div>

      <div className='main-container-limitador box-futuro-germinne'>
        <h3>Visão de <span>futuro</span></h3>
  
        <FuturoSobreNos 
          titulo={['Aplicativo para ', <span key={1}>Android e iOS</span>]}
          srcImg='https://germinnecomp-img.s3.sa-east-1.amazonaws.com/mockup.png'
          descricao='Queremos portar 100% da plataforma para o Mobile, trazendo conforto e felicidade na palma da sua mão! Em breve você terá tudo que precisa a um clique de distância.'
        />

        <FuturoSobreNos
          titulo={['Você poderá Interagir com o ', <span key={2}>Chatbot</span>, ' da Germinne!']}
          srcImg='https://germinnecomp-img.s3.sa-east-1.amazonaws.com/chat-germinne.png'
          descricao='Criaremos um Chatbot que irá tirar todas as suas dúvidas e curiosidades sobre suas hortinhas, sobre a GerminneBox, nosso site e muitos outros temas que te interessam.'
        />

        <FuturoSobreNos 
          titulo={['A criação das ', <span key={3}>Hortas verticais</span>, ' únicas da Germinne!']}
          srcImg='https://germinnecomp-img.s3.sa-east-1.amazonaws.com/horta-vertical-sobre-nos.png'
          descricao='Futuramente você poderá ter as hortas verticais da Germinne e terá mais alimentos organicos e saudáveis dentro do seu lar ocupando menos espaço e mais conforto.'
        />
      </div>
    </div>
  );
}

export default SobreNos;
