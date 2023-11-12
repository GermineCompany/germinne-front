import React from 'react';
import './home.css';
import CardHomeServicos from '../../components/CardHomeServicos/CardHomeServicos';

function Home() {
  return (
    <div>
      <div className='banner-home'>
        <h2>O <span>verde</span> no urbano.</h2>
        <p>Semeia a vida, cultive sabor! A <span>Germinne</span> almeja um futuro verde e sustentavel nas cidades.</p>
      </div>

      <article>
        <div className='box-card-servicos'>
          <CardHomeServicos 
            title='Explore informações sobre a agricultura'
            subtitle={['Acesse o ', <span key={ 1 }>Germinne Blog</span>]}
            className='first-service-card'
          />
          <CardHomeServicos 
            title='Contrate Serviços de Agricultura'
            subtitle={['Profissionais de ', <span key={ 2 }>Qualidade</span>]}
            className='second-service-card'
          />
          <CardHomeServicos 
            title='Plante sem dificuldades'
            subtitle={['Conheça a ', <span key={ 3 }>Germinne Box</span>]}
            className='third-service-card'
          />
        </div>
      </article>
    </div>
  );
}

export default Home;