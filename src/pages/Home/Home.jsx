import React from 'react';
import './home.css';
import CardHomeServicos from '../../components/CardHomeServicos/CardHomeServicos';
import CardHomeGerminne from '../../components/CardHomeGerminne/CardHomeGerminne';
import ArticleBeneficios from '../../components/ArticleBeneficios/ArticleBeneficios';

import articleImage1 from '../../images/article-image-1.png';
import articleImage2 from '../../images/article-image-2.png';
import articleImage3 from '../../images/article-image-3.png';
import CardAvaliacao from '../../components/CardAvaliacao/CardAvaliacao';

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

      <section className='box-beneficios-agricultura'>
        <h2>Benefícios da <span>Agricultura Urbana</span></h2>

        <ArticleBeneficios 
          urlImg={ articleImage1 }
          altImg='Imagem de várias comidas em uma mesa'
          title='Alimentos Mais Frescos e Nutritivos'
          text='Os alimentos cultivados localmente são colhidos no auge da maturidade, garantindo maior frescor e preservação dos nutrientes, proporcionando opções mais saudáveis para os consumidores.'
        />

        <ArticleBeneficios 
          urlImg={ articleImage2 }
          altImg='Imagem de pessoas trabalhando em uma horta'
          title='Sustentabilidade Ambiental'
          text='Ao aproveitar espaços urbanos para o cultivo, a agricultura urbana contribui para a redução da pegada de carbono, promove a biodiversidade e cria ambientes mais sustentáveis nas cidades.'
        />

        <ArticleBeneficios 
          urlImg={ articleImage3 }
          altImg='Imagem de uma pessoa com luvas trabalhando em uma horta'
          title='Cultivar plantas: um impulso positivo para a saúde mental'
          text='Plantar faz bem para a cabeça! Reduz estresse e ansiedade, trazendo alegria com a natureza. Jardinagem dá sensação boa, deixando a gente mais feliz. Cuidar das plantas e ter rotinas de jardinagem é tipo uma terapia, criando um ambiente que faz a gente se sentir bem. Em resumo, plantar não só dá comida, mas também faz a gente se sentir bem por dentro.'
        />
      </section>

      <section className='box-avaliacoes'>
        <h3><span>Avaliações</span> dos nossos <span>Clientes</span></h3>

        <div>
          <CardAvaliacao 
            srcImg='https://media.licdn.com/dms/image/C4D03AQFmj98FQmRvrA/profile-displayphoto-shrink_800_800/0/1662045322237?e=1702512000&v=beta&t=HlsPx_deG_QLg0MTJJNiK8aaT4mJ7AVKrcCCabPb50I'
            altImg='Foto do Gabriel Augusto'
            description='"Me tornei pai de planta com a Germine Box"'
            name='Gabriel Augusto'
          />

          <CardAvaliacao 
            srcImg='https://media.licdn.com/dms/image/C4D03AQFmj98FQmRvrA/profile-displayphoto-shrink_800_800/0/1662045322237?e=1702512000&v=beta&t=HlsPx_deG_QLg0MTJJNiK8aaT4mJ7AVKrcCCabPb50I'
            altImg='Foto do Gabriel Augusto'
            description='“É otimo, pouco trabalho, quase nenhum.”'
            name='Gabriel Silva'
          />

          <CardAvaliacao 
            srcImg='https://media.licdn.com/dms/image/C4D03AQFmj98FQmRvrA/profile-displayphoto-shrink_800_800/0/1662045322237?e=1702512000&v=beta&t=HlsPx_deG_QLg0MTJJNiK8aaT4mJ7AVKrcCCabPb50I'
            altImg='Foto do Gabriel Augusto'
            description='"Me tornei pai de planta com a Germine Box"'
            name='Gabriel Lindo Augusto'
          />
        </div>
      </section>
    </div>
  );
}

export default Home;