import React from 'react';
import CardConteudoGB from '../../components/CardConteudoGB/CardConteudoGB';
import vaso from '../../images/germinne-box-3.png';
import sementes from '../../images/gb-conteudo-sementes.svg';
import substrato from '../../images/gb-conteudo-substrato.svg';
import qrcode from '../../images/gb-conteudo-qrcode.svg';
import conhecaGbImagem from '../../images/conheca-gb.png';
import './loja.css';
import carouselgb1 from '../../images/carouselgb1.png';
import carouselgb2 from '../../images/carouselgb2.png';
import carouselgb3 from '../../images/carouselgb3.png';
import review1 from '../../images/review-loja-1.png';
import CardPerguntas from '../../components/CardPerguntas/CardPerguntas';
import './loja.css';
import DescricaoProduto from '../../components/DescricaoProduto/DescricaoProduto';
import { useState } from 'react';
import CardReviewLoja from '../../components/CardReviewLoja/CardReviewLoja';
import MotivosParaComprar from '../../components/MotivosParaComprar/MotivosParaComprar';
import CarouselLoja from '../../components/CarouselLoja/CarouselLoja';
import Carousel from '../../components/Carousel/Carousel';
import CarouselAvaliacao from '../../components/CarouselAvaliacao/CarouselAvaliacao';
import CarouselAvaliacaoMb from '../../components/CarouselAvaliacaoMb/CarouselAvaliacaoMb';

function Loja() {

  return (
    <>
      <div className="main-container-limitador">
        <div className="conheca-gb">
          <img src={conhecaGbImagem} alt="" />
          <div className="conheca-gb-texto">
            <h2>
              Conheça a <span className="textoVerde">GerminneBox</span>
            </h2>
            <p>
              Ja pensou em cultivar seus próprios alimentos? Nossa Box inclui todo
              o necessário para facilitar sua jornada, você terá tudo à mão para
              começar a cultivar suas próprias hortaliças, ervas e temperos com
              eficiência e comodidade. Com nosso kit você estará cultivando suas
              próprias plantinhas em um piscar de olhos.
            </p>
          </div>
        </div>

        <div className="conteudo-gb">
          <h3>
            O que vem na <span className="textoVerde">GerminneBox</span>?
          </h3>
          <div className="conteudo-gb-cards">
            <CardConteudoGB
              srcImg={vaso}
              altImg="SADASDA"
              text="GerminneBox auto irrigável"
            />
            <CardConteudoGB
              srcImg={sementes}
              altImg="SADASDA"
              text="Sementes orgânicas"
            />
            <CardConteudoGB
              srcImg={substrato}
              altImg="SADASDA"
              text="Substrato de qualidade"
            />
            <CardConteudoGB
              srcImg={qrcode}
              altImg="SADASDA"
              text="QR Code com instruções"
            />
          </div>
        </div>

        <div className="carousel-pagina-gb-title">
          <h2>Razões para ter sua própria hortinha em casa</h2>
        </div>

        <div className="carousel-content">
          <CarouselLoja
            slide1={<MotivosParaComprar
              srcImg={carouselgb1}
              altImg='mulher comendo salada'
              titulo='Alimentação saudável e saborosa'
              texto='Pesquisas indicam que ter plantas em casa pode melhorar seu bem-estar emocional e diminuir o estresse. Estar perto de plantas e se conectar com a natureza ajuda a relaxar, trazendo uma sensação de calma. Fora isso, cuidar das plantinhas é uma atividade terapêutica e recompensadora, proporcionando um descanso relaxante da correria do dia a dia.'
            />}
            slide2={<MotivosParaComprar
              srcImg={carouselgb2}
              altImg='mulher comendo salada'
              titulo='Bem-estar e terapia'
              texto='Se você decidir plantar suas próprias hortaliças, ervas ou frutas em casa, vai ter comida fresquinha e saudável direto do seu cantinho verde. Essas comidinhas podem ser ainda mais gostosas e nutritivas do que as do mercado, além de dar aquele orgulho de comer algo que você mesmo cultivou.'
            />}
            slide3={<MotivosParaComprar
              srcImg={carouselgb3}
              altImg='Sua casa mais verde e bonita'
              titulo='Alimentação saudável e saborosa'
              texto='Plantinhas fazem maravilhas no visual de qualquer ambiente, trazendo beleza e vida. Com suas cores animadas, texturas e formas diferentes, elas dão um up em qualquer lugar. Se você cuidar direitinho delas, a casa vira um cantinho super aconchegante e agradável.'
            />}
          />
        </div>

        <div className='carousel-mobile-loja'>
          <Carousel
            slide1={<MotivosParaComprar
              srcImg={carouselgb1}
              altImg='mulher comendo salada'
              titulo='Alimentação saudável e saborosa'
              texto='Pesquisas indicam que ter plantas em casa pode melhorar seu bem-estar emocional e diminuir o estresse. Estar perto de plantas e se conectar com a natureza ajuda a relaxar, trazendo uma sensação de calma. Fora isso, cuidar das plantinhas é uma atividade terapêutica e recompensadora, proporcionando um descanso relaxante da correria do dia a dia.'
            />}
            slide2={<MotivosParaComprar
              srcImg={carouselgb2}
              altImg='mulher comendo salada'
              titulo='Bem-estar e terapia'
              texto='Se você decidir plantar suas próprias hortaliças, ervas ou frutas em casa, vai ter comida fresquinha e saudável direto do seu cantinho verde. Essas comidinhas podem ser ainda mais gostosas e nutritivas do que as do mercado, além de dar aquele orgulho de comer algo que você mesmo cultivou.'
            />}
            slide3={<MotivosParaComprar
              srcImg={carouselgb3}
              altImg='Sua casa mais verde e bonita'
              titulo='Alimentação saudável e saborosa'
              texto='Plantinhas fazem maravilhas no visual de qualquer ambiente, trazendo beleza e vida. Com suas cores animadas, texturas e formas diferentes, elas dão um up em qualquer lugar. Se você cuidar direitinho delas, a casa vira um cantinho super aconchegante e agradável.'
            />}
          />
        </div>


        <div className='germinnebox-title'>
          <h2>Adquira agora sua <span>GerminneBox</span>!</h2>
          <DescricaoProduto />
        </div>

      </div>
      <div className='review-loja-germinne-box'>
        <h3>Avaliações dos nossos <span>clientes</span>:</h3>

        <div className='carousel-rewiew-desktop'>
          <CarouselAvaliacao
            slide1={<CardReviewLoja
              fotoCliente='https://germinnecomp-img.s3.sa-east-1.amazonaws.com/thais-angelo.jpg'
              nomeCliente='Thais Ângelo'
              descricao='"Me tornei uma mãe de planta com a Germinne Box e, sério, estou adorando! 😄 O kit é super completo e simples. A experiência tem sido incrível, tudo fácil e descomplicado."'
              fotoReview={review1}
            />}

            slide2={<CardReviewLoja
              fotoCliente='https://media.licdn.com/dms/image/C4D03AQFmj98FQmRvrA/profile-displayphoto-shrink_800_800/0/1662045322621?e=1707955200&v=beta&t=ox5WjTMlulu41s5QUazJH3v7dOkmCwa6WAq-qE7feRI'
              nomeCliente='Gabriel Augusto'
              descricao='"A Germinne Box é tipo um abraço para a minha varanda! 🌱 Comecei minha horta com esse kit incrível e tô apaixonado. Tudo o que eu precisava veio junto, e não precisei me preocupar em ser expert em plantas. É só amor verde!"'
              fotoReview={review1}
            />}

            slide3={<CardReviewLoja
              fotoCliente='https://media.licdn.com/dms/image/C4D03AQFX1J5BuXXoyA/profile-displayphoto-shrink_100_100/0/1636810200050?e=2147483647&v=beta&t=YlQREAL0kou82irvlcwTXS-GuXC_6KqEHSzpu8BBrJE'
              nomeCliente='Drickis Maria'
              descricao='"Simplesmente incrível! 🌿💚 O kit autoirrigável é um game changer. Só coloco as sementes, curto a vibe verde e deixo o sistema fazer a mágica. Ter uma horta nunca foi tão fácil e relaxante! ✨"'
              fotoReview={review1}
            />}

            slide4={<CardReviewLoja
              fotoCliente='https://media.licdn.com/dms/image/C4D03AQFX1J5BuXXoyA/profile-displayphoto-shrink_100_100/0/1636810200050?e=2147483647&v=beta&t=YlQREAL0kou82irvlcwTXS-GuXC_6KqEHSzpu8BBrJE'
              nomeCliente='Drickis Maria'
              descricao='"Simplesmente incrível! 🌿💚 O kit autoirrigável é um game changer. Só coloco as sementes, curto a vibe verde e deixo o sistema fazer a mágica. Ter uma horta nunca foi tão fácil e relaxante! ✨"'
              fotoReview={review1}
            />}
          />
        </div>

        <div className='carousel-mobile-review'>
          <CarouselAvaliacaoMb
            slide1={<CardReviewLoja
              fotoCliente='https://germinnecomp-img.s3.sa-east-1.amazonaws.com/thais-angelo.jpg'
              nomeCliente='Thais Ângelo'
              descricao='"Me tornei uma mãe de planta com a Germinne Box e, sério, estou adorando! 😄 O kit é super completo e simples. A experiência tem sido incrível, tudo fácil e descomplicado."'
              fotoReview={review1}
            />}

            slide2={<CardReviewLoja
              fotoCliente='https://media.licdn.com/dms/image/C4D03AQFmj98FQmRvrA/profile-displayphoto-shrink_800_800/0/1662045322621?e=1707955200&v=beta&t=ox5WjTMlulu41s5QUazJH3v7dOkmCwa6WAq-qE7feRI'
              nomeCliente='Gabriel Augusto'
              descricao='"A Germinne Box é tipo um abraço para a minha varanda! 🌱 Comecei minha horta com esse kit incrível e tô apaixonado. Tudo o que eu precisava veio junto, e não precisei me preocupar em ser expert em plantas. É só amor verde!"'
              fotoReview={review1}
            />}

            slide3={<CardReviewLoja
              fotoCliente='https://media.licdn.com/dms/image/C4D03AQFX1J5BuXXoyA/profile-displayphoto-shrink_100_100/0/1636810200050?e=2147483647&v=beta&t=YlQREAL0kou82irvlcwTXS-GuXC_6KqEHSzpu8BBrJE'
              nomeCliente='Drickis Maria'
              descricao='"Simplesmente incrível! 🌿💚 O kit autoirrigável é um game changer. Só coloco as sementes, curto a vibe verde e deixo o sistema fazer a mágica. Ter uma horta nunca foi tão fácil e relaxante! ✨"'
              fotoReview={review1}
            />}

            slide4={<CardReviewLoja
              fotoCliente='https://media.licdn.com/dms/image/C4D03AQFX1J5BuXXoyA/profile-displayphoto-shrink_100_100/0/1636810200050?e=2147483647&v=beta&t=YlQREAL0kou82irvlcwTXS-GuXC_6KqEHSzpu8BBrJE'
              nomeCliente='Drickis Maria'
              descricao='"Simplesmente incrível! 🌿💚 O kit autoirrigável é um game changer. Só coloco as sementes, curto a vibe verde e deixo o sistema fazer a mágica. Ter uma horta nunca foi tão fácil e relaxante! ✨"'
              fotoReview={review1}
            />}
          />
        </div>
      </div>

      <div className='main-container-limitador'>
        <div className="faq">
          <h2 className="faq-title">Perguntas frequentes</h2>
          <div className="box-card-perguntas">
            <CardPerguntas
              title="Quantas horas de sol por dia minha planta precisa?"
              text="Para que suas plantinhas tenham o desenvolvimento ideal, você vai precisar de pelo menos 4 horas de sol direto ao dia, e não basta ser só aquela claridade, é necessário a luz do sol incidir diretamente sobre sua hortinha."
            />
            <hr />
            <CardPerguntas
              title="Quanto tempo leva para germinar?"
              text="Vai depender do tipo da semente. Disponibilizamos em nosso blog informações completinhas sobre diversas plantas, confira aqui."
            />
            <hr />
            <CardPerguntas
              title="Preciso regar?"
              text="Nosso kit conta com um sistema de autoirrigação, que facilita o cuidado das plantas ao fornecer água de forma automática. Então se você tem pouco tempo disponível ou se não têm experiência prévia no cultivo não se preocupe, nosso kit não precisa de maiores trabalhos :)"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Loja;
