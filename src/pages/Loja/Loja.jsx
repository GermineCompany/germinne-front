import React from 'react';
import CardConteudoGB from '../../components/CardConteudoGB/CardConteudoGB';
import vaso from '../../images/gb-conteudo-vaso.svg';
import sementes from '../../images/gb-conteudo-sementes.svg';
import substrato from '../../images/gb-conteudo-substrato.svg';
import qrcode from '../../images/gb-conteudo-qrcode.svg';
import conhecaGbImagem from '../../images/conheca-gb.png';
import './loja.css';
import CarouselPaginaGB from '../../components/CarouselPaginaGB/CarouselPaginaGB';
import carouselGbImagem1 from '../../images/CarouselGB1.png';
import doublearrow from '../../images/doublearrow.svg';
import CardPerguntas from '../../components/CardPerguntas/CardPerguntas';
import elipsedarrow from '../../images/elipsed-arrow.svg';
import './loja.css';
import DescricaoProduto from '../../components/DescricaoProduto/DescricaoProduto';



function Loja() {

  return (
    <div className='pagina-loja'>

      <DescricaoProduto />

      <div className='conheca-gb'>
        <img src={conhecaGbImagem} alt="" />
        <div className='conheca-gb-texto'>
          <h2>Conheça a <span className='textoVerde'>GerminneBox</span></h2>
          <p>Ja pensou em cultivar seus próprios alimentos? Nossa Box inclui todo o necessário para facilitar sua jornada, você terá tudo à mão para começar a cultivar suas próprias hortaliças, ervas e temperos com eficiência e comodidade. Com nosso kit você estará cultivando suas próprias plantinhas em um piscar de olhos.</p>
        </div>
      </div>

      <div className='conteudo-gb'>
        <h3>O que vem na <span className='textoVerde'>GerminneBox</span>?</h3>
        <div className='conteudo-gb-cards'> 
          <CardConteudoGB srcImg={vaso} altImg='SADASDA' text='Vaso autoirrigável'/>
          <CardConteudoGB srcImg={sementes} altImg='SADASDA' text='Sementes orgânicas' />
          <CardConteudoGB srcImg={substrato} altImg='SADASDA' text='Substrato de qualidade'/>
          <CardConteudoGB srcImg={qrcode} altImg='SADASDA' text='QR Code com instruções' />
        </div>
      </div>
      
      <div className='carousel-pagina-gb-title'>
        <h2 >Motivos para ter sua própria hortinha em casa</h2>
        <img src={doublearrow} alt="seta dupla" />

      </div>

      <div className='carousel-content'>
        <CarouselPaginaGB 
          srcImg={carouselGbImagem1} 
          altImg='carouselGbImagem1' 
          title='Alimentação saudável e saborosa' 
          text='Se você decidir plantar suas próprias hortaliças, ervas ou frutas em casa, vai ter comida fresquinha e saudável direto do seu cantinho verde. Essas comidinhas podem ser ainda mais gostosas e nutritivas do que as do mercado, além de dar aquele orgulho de comer algo que você mesmo cultivou.'
        />
        <img className='elipsedarrow' src={elipsedarrow} alt="" />
      </div>

      <div className='faq'>
        <h2 className='faq-title'>Perguntas frequentes</h2>
        <div className='box-card-perguntaS'>
          <CardPerguntas 
            title='Quantas horas de sol por dia minha planta precisa?'
            text='Para que suas plantinhas tenham o desenvolvimento ideal, você vai precisar de pelo menos 4 horas de sol direto ao dia, e não basta ser só aquela claridade, é necessário a luz do sol incidir diretamente sobre sua hortinha.'  
          />
          <hr />
          <CardPerguntas  
            title='Quanto tempo leva para germinar?'  
            text='Vai depender do tipo da semente. Disponibilizamos em nosso blog informações completinhas sobre diversas plantas, confira aqui.'
          />
          <hr />
          <CardPerguntas  
            title='Preciso regar?' 
            text='Nosso kit conta com um sistema de autoirrigação, que facilita o cuidado das plantas ao fornecer água de forma automática. Então se você tem pouco tempo disponível ou se não têm experiência prévia no cultivo não se preocupe, nosso kit não precisa de maiores trabalhos :)'  
          />
        </div>
      </div>
    </div>
  );
}

export default Loja;
