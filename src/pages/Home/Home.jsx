import React from 'react';
import './home.css';
import CardHomeServicos from '../../components/CardHomeServicos/CardHomeServicos';
import CardHomeGerminne from '../../components/CardHomeGerminne/CardHomeGerminne';
import ArticleBeneficios from '../../components/ArticleBeneficios/ArticleBeneficios';
import articleImage1 from '../../images/article-image-1.png';
import articleImage2 from '../../images/article-image-2.png';
import articleImage3 from '../../images/article-image-3.png';
import CardAvaliacao from '../../components/CardAvaliacao/CardAvaliacao';
import Carousel from '../../components/Carousel/Carousel';
import CarouselBanner from '../../components/CarouselBanner/CarouselBanner';
import CarouselAvaliacao from '../../components/CarouselAvaliacao/CarouselAvaliacao';
import CarouselAvaliacaoMb from '../../components/CarouselAvaliacaoMb/CarouselAvaliacaoMb';

function Home() {
  return (
    <div>
      <CarouselBanner
        slide1={<div className="banner-home">
          <h2>
            O <span>verde</span> no urbano
          </h2>
          <p>
            Semeia a vida, cultive sabor! A <span>Germinne</span> almeja um futuro
            verde e sustentavel nas cidades.
          </p>
          <span><a href="/blog">saiba mais...</a></span>
        </div>}
        slide2={<div className="banner-home germinnebox-home">
          <h2>
            NÃO TEM <span>ESPAÇO</span> EM CASA?
          </h2>
          <p>
            Conheça a <span>Germinne</span> Box, cultive seu próprio alimento sem dificuldades!
          </p>
          <span><a href="/loja">saiba mais...</a></span>
        </div>}
        slide3={
          <div className="banner-home contrate-home">
            <h2>
              PRECISA DOS SERVIÇOS DE UM <span>PROFISSIONAL?</span>
            </h2>
            <p>
              Ache o <span>profissional</span> ideal para <span>voce</span> na nossa vitrine!
            </p>
            <span><a href="/contrate">saiba mais...</a></span>
          </div>

        }
      />

      <div className='main-container-limitador'>

        <div className='box-cards'>

          <h2>Conheça a <span>Germinne</span></h2>

          <div className='box-card-germinne'>
            <CardHomeGerminne
              title={['Temos a missão de levar o ', <span key={1}>verde</span>, ' para as áreas urbanas']}
              className='first-germinne-card'
            />

            <CardHomeGerminne
              title={['Promovemos a ', <span key={2}>sustentabilidade</span>, ' contribuindo para uma cidade mais saudável']}
              className='second-germinne-card'
            />

            <CardHomeGerminne
              title={['Temos a missão de levar o ', <span key={3}>verde</span>, ' para as áreas urbanas']}
              className='third-germinne-card'
            />
          </div>

          <div className='hide-carousel-germinne'>
            <Carousel
              slide1={<CardHomeGerminne
                title={['Temos a missão de levar o ', <span key={1}>verde</span>, ' para as áreas urbanas']}
                className='first-germinne-card'
              />}

              slide2={<CardHomeGerminne
                title={['Promovemos a ', <span key={2}>sustentabilidade</span>, ' contribuindo para uma cidade mais saudável']}
                className='second-germinne-card'
              />}

              slide3={<CardHomeGerminne
                title={['Temos a missão de levar o ', <span key={3}>verde</span>, ' para as áreas urbanas']}
                className='third-germinne-card'
              />}
            />
          </div>
        </div>

        <div className='banner-mvv'>
          <div className='mvv-itens'>
            <h2>CULTIVO</h2>
            <p>A nossa missão é democratizar a agricultura urbana, fornecendo informações corretas e práticas junto com um profissional, para que todos possam ter acesso a alimentos frescos e saudáveis.</p>
          </div>
          <div className='box-mvv2'>
            <div className='mvv-itens'>
              <h2>COLHEITA</h2>
              <p>Ser a principal plataforma de informações, serviço de horticultura e vendas de produtos que incentivam as hortas urbanas, reconhecida pela sua contribuição para a sustentabilidade e bem-estar das pessoas.</p>
            </div>
            <div className='mvv-itens'>
              <h2>NUTRIENTES</h2>
              <ul>
                <li>Ética</li>
                <li>Confiança</li>
                <li>Sustentabilidade</li>
                <li>Comprometimento</li>
                <li>Informações de Qualidade</li>
                <li>Eficiência</li>
                <li>Tecnologia</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <div className='banner-mvv-mobile'>

        <Carousel
          slide1={<div className='mvv-mobile mvv-m'>
            <h2>CULTIVO</h2>
            <p>A nossa missão é democratizar a agricultura urbana, fornecendo informações corretas e práticas junto com um profissional, para que todos possam ter acesso a alimentos frescos e saudáveis.</p>
          </div>}
          slide2={<div className='mvv-mobile mvv-v'>
            <h2>COLHEITA</h2>
            <p>Ser a principal plataforma de informações, serviço de horticultura e vendas de produtos que incentivam as hortas urbanas, reconhecida pela sua contribuição para a sustentabilidade e bem-estar das pessoas.</p>
          </div>}
          slide3={<div className='mvv-mobile mvv-vv'>
            <h2>NUTRIENTES</h2>
            <ul>
              <li>Ética</li>
              <li>Confiança</li>
              <li>Sustentabilidade</li>
              <li>Comprometimento</li>
              <li>Informações de Qualidade</li>
              <li>Eficiência</li>
              <li>Tecnologia</li>
            </ul>
          </div>}
        />

      </div>

      <div className='main-container-limitador'>

        <div className='box-cards'>

          <h2>Conheça nossas <span>soluções</span>:</h2>

          <div className='box-card-servicos'>

            <CardHomeServicos
              title='Explore informações sobre a agricultura'
              subtitle={['Acesse o ', <span className='home-blog' key={1}>Germinne Blog</span>]}
              className='first-service-card'
              routeName='blog'
            />

            <CardHomeServicos
              title='Plante sem dificuldades'
              subtitle={['Conheça a ', <span className='home-germinnebox' key={3}>Germinne Box</span>]}
              className='third-service-card'
              routeName='loja'
            />

            <CardHomeServicos
              title='Contrate profissionais de confinaça'
              subtitle={['Profissionais de ', <span className='home-contrate' key={2}>Qualidade</span>]}
              className='second-service-card'
              routeName='contrate'
            />


          </div>

        </div>


        <section className='box-beneficios-agricultura'>
          <h2>Benefícios da <span>Agricultura Urbana</span></h2>

          <div className='beneficios-agricultura-home'>
            <ArticleBeneficios
              urlImg={articleImage1}
              altImg='Imagem de várias comidas em uma mesa'
              title='Alimentos mais frescos e nutritivos'
              text='Os alimentos cultivados localmente são colhidos no auge da maturidade, garantindo maior frescor e preservação dos nutrientes, proporcionando opções mais saudáveis para os consumidores.'
            />

            <ArticleBeneficios
              urlImg={articleImage2}
              altImg='Imagem de pessoas trabalhando em uma horta'
              title='Sustentabilidade ambiental'
              text='Ao aproveitar espaços urbanos para o cultivo, a agricultura urbana contribui para a redução da pegada de carbono, promove a biodiversidade e cria ambientes mais sustentáveis nas cidades.'
            />

            <ArticleBeneficios
              urlImg={articleImage3}
              altImg='Imagem de uma pessoa com luvas trabalhando em uma horta'
              title='Cultivar plantas: um impulso positivo para a saúde mental'
              text='Plantar faz bem para a cabeça! Reduz estresse e ansiedade, trazendo alegria com a natureza. Horticultura dá sensação boa, deixando a gente mais feliz. Cuidar das plantas e ter rotinas de plantio é tipo uma terapia, criando um ambiente que faz a gente se sentir bem.'
            />
          </div>

        </section>

      </div>
      <section className='box-avaliacoes'>
        <h3>O que dizem nossos <span>usuários</span></h3>

        <div className='carousel-avaliacao-home'>

          <CarouselAvaliacao
            slide1={<CardAvaliacao
              srcImg='https://media.licdn.com/dms/image/C4D03AQFmj98FQmRvrA/profile-displayphoto-shrink_800_800/0/1662045322621?e=1707955200&v=beta&t=ox5WjTMlulu41s5QUazJH3v7dOkmCwa6WAq-qE7feRI'
              altImg='Foto do Gabriel Augusto'
              description='"A Germinne trouxe uma vibe nova pra minha vida. Ter minhas próprias plantinhas me anima a ser mais saudável, e isso tá fazendo toda a diferença."'
              name='Gabriel Augusto'
            />}

            slide2={<CardAvaliacao
              srcImg='https://germinnecomp-img.s3.sa-east-1.amazonaws.com/paula-lima.png'
              altImg='Foto da Paula Lima'
              description='“A plataforma foi uma mão na roda para mim que não sabia nada sobre cultivo. Nota 1000 hahaha”'
              name='Paula Lima'
            />}

            slide3={<CardAvaliacao
              srcImg='https://germinnecomp-img.s3.sa-east-1.amazonaws.com/jailson.png'
              altImg='Foto do Jailson Costa'
              description='"Amei a plataforma! Tá doce para cultivar minha hortinha agora e já indiquei pra minha mãe"'
              name='Jailson Costa'
            />}

            slide4={<CardAvaliacao
              srcImg='https://media.licdn.com/dms/image/C4D03AQFX1J5BuXXoyA/profile-displayphoto-shrink_100_100/0/1636810200050?e=2147483647&v=beta&t=YlQREAL0kou82irvlcwTXS-GuXC_6KqEHSzpu8BBrJE'
              altImg='Foto da Drickis Maria'
              description='"A minha Mirella está adorando cuidar da sua horta. Ela está sempre me falando sobre como as plantinhas estão crescendo e como elas estão ficando bonitas."'
              name='Drickis Maria'
            />}
          />
        </div>

        <div className='carousel-mobile-avaliacao-home'>
          <CarouselAvaliacaoMb
            slide1={<CardAvaliacao
              srcImg='https://media.licdn.com/dms/image/C4D03AQFmj98FQmRvrA/profile-displayphoto-shrink_800_800/0/1662045322621?e=1707955200&v=beta&t=ox5WjTMlulu41s5QUazJH3v7dOkmCwa6WAq-qE7feRI'
              altImg='Foto do Gabriel Augusto'
              description='"A Germinne trouxe uma vibe nova pra minha vida. Ter minhas próprias plantinhas me anima a ser mais saudável, e isso tá fazendo toda a diferença."'
              name='Gabriel Augusto'
            />}

            slide2={<CardAvaliacao
              srcImg='https://germinnecomp-img.s3.sa-east-1.amazonaws.com/paula-lima.png'
              altImg='Foto da Paula Lima'
              description='“A plataforma foi uma mão na roda para mim que não sabia nada sobre cultivo. Nota 1000 hahaha”'
              name='Paula Lima'
            />}

            slide3={<CardAvaliacao
              srcImg='https://germinnecomp-img.s3.sa-east-1.amazonaws.com/jailson.png'
              altImg='Foto do Jailson Costa'
              description='"Amei a plataforma! Tá doce para cultivar minha hortinha agora e já indiquei pra minha mãe"'
              name='Jailson Costa'
            />}

            slide4={<CardAvaliacao
              srcImg='https://media.licdn.com/dms/image/C4D03AQFX1J5BuXXoyA/profile-displayphoto-shrink_100_100/0/1636810200050?e=2147483647&v=beta&t=YlQREAL0kou82irvlcwTXS-GuXC_6KqEHSzpu8BBrJE'
              altImg='Foto da Drickis Maria'
              description='"A minha Mirella está adorando cuidar da sua horta. Ela está sempre me falando sobre como as plantinhas estão crescendo e como elas estão ficando bonitas."'
              name='Drickis Maria'
            />}
          />
        </div>
      </section>

    </div>
  );
}

export default Home;
