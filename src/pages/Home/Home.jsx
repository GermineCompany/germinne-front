import React from 'react';
import './home.css';
import CardHomeServicos from '../../components/CardHomeServicos/CardHomeServicos';
import CardHomeGerminne from '../../components/CardHomeGerminne/CardHomeGerminne';

function Home() {
  return (
    <div>
      <div className='banner-home'>
        <h2>O <span>verde</span> no urbano.</h2>
        <p>Semeia a vida, cultive sabor! A <span>Germinne</span> almeja um futuro verde e sustentavel nas cidades.</p>
      </div>

      <article className='box-card-home'>
        <div className='box-card-servicos'>
          <CardHomeServicos 
            title='Explore informações sobre a agricultura'
            subtitle={['Acesse o ', <span key={ 1 }>Germinne Blog</span>]}
            className='first-service-card'
            routeName='blog'
          />
          <CardHomeServicos 
            title='Contrate Serviços de Agricultura'
            subtitle={['Profissionais de ', <span key={ 2 }>Qualidade</span>]}
            className='second-service-card'
            routeName='horticultor'
          />
          <CardHomeServicos 
            title='Plante sem dificuldades'
            subtitle={['Conheça a ', <span key={ 3 }>Germinne Box</span>]}
            className='third-service-card'
            routeName='loja'
          />
        </div>

        <div className='box-card-germinne'>
          <CardHomeGerminne 
            title={['Temos a missão de levar o ', <span key={ 1 }>verde</span>, ' para as áreas urbanas']}
            className='first-germinne-card'
          />

          <CardHomeGerminne 
            title={['Temos a missão de levar o ', <span key={ 2 }>verde</span>, ' para as áreas urbanas']}
            className='second-germinne-card'
            subtitle={['Conheça a ', <span key={ 4 }>Germinne</span>]}
            id='second-germinne-large'
          />

          <CardHomeGerminne 
            title={['Temos a missão de levar o ', <span key={ 3 }>verde</span>, ' para as áreas urbanas']}
            className='third-germinne-card'
          />
        </div>
      </article>

      <section>
        <h2>Benefícios da Agricultura Urbana</h2>
      </section>
    </div>
  );
}

export default Home;