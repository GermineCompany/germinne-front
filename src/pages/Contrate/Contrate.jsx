import React from 'react';
import './contrate.css';
import '../../components/ArticleBeneficios/articleBeneficios.css';
import ArticleBeneficios from '../../components/ArticleBeneficios/ArticleBeneficios';
import servico1 from '../../images/servico1.svg';
import servico2 from '../../images/servico2.svg';
import servico3 from '../../images/servico3.svg';
import PassoApasso from '../../components/PassoApasso/PassoApasso';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contrate() {
  const navigate = useNavigate();

  const [CEP, setCEP] = useState('');

  const handleChange = (event) => setCEP(event.target.value);

  return (
    <div>

      <div className="banner-faca-parte">
        <h2>ENCONTRE AGORA O <span>PROFISSIONAL</span> IDEAL PARA VOCÊ</h2>
        <p>A Germinne conecta profissionais qualificados a clientes entusiastas. Encontre ajuda especializada e tramsforme sua vontade de cultivar em realidade.</p>
      </div>


      <div className='main-container-limitador'>


        <h2>Descubra como funciona</h2>

        <div className="passo-a-passo">

          <div>
            <PassoApasso
              titulo='Passo 1'
              srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/passo1contrate.svg"
              altImg="icone passo 1"
              texto="Realize seu cadastro na plataforma"
            />
          </div>

          <div className='barra-amarela'></div>

          <div>
            <PassoApasso
              titulo='Passo 2'
              srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/passo2contrate.svg"
              altImg="icone passo 2"
              texto="Complete seus dados e aguarde sua validação"
            />
          </div>

          <div className='barra-amarela'></div>

          <div>
            <PassoApasso
              titulo='Passo 3'
              srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/passo3contrate.svg"
              altImg="icone passo 3"
              texto="Pronto! agora você pode fechar trabalhos a vontade"
            />
          </div>

          <div className='barra-amarela'></div>

          <div>
            <PassoApasso
              titulo='Passo 3'
              srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/passo4contrate.svg"
              altImg="icone passo 3"
              texto="Pronto! agora você pode fechar trabalhos a vontade"
            />
          </div>

        </div>


        {/* <div className='box-texto-como-funciona'>
          <h2>Como funciona?</h2>
          <ComoFunciona
            urlImg=''
            altImg='icone Pergunta'
            conteudo='Responda as questões sobre o tipo de trabalho, onde será feito e o tamanho aproximado do espaço.'
          />

          <ComoFunciona
            urlImg=''
            altImg='icone Horticultor'
            conteudo='Acesse serviços de horticultura e tenha hortas facilmente acessíveis!'
          />

          <ComoFunciona
            urlImg=''
            altImg='icone entre em contato'
            conteudo='Entre em contato direto com o nosso parceiro através do WhatsApp ou Chat integrado na plataforma e feche os detalhes do serviço.'
          />

          <ComoFunciona
            urlImg=''
            altImg='icone fechamento de serviço'
            conteudo='Após aprovar o orçamento nosso parceiro vai realizar o serviço na data e local combinados. '
          />
        </div> */}


        <div className='box-servicos'>
          <h2>
            <span>Promovemos</span> diversos serviços:
          </h2>

          <div className='box-card-servicos-horticultores'>
            <ArticleBeneficios
              urlImg={servico1}
              altImg='Imgem de um homem plantando'
              title='Plantio e replantio'
              text='Se você sonha em transformar espaços inutilizados em deslumbrantes hortas orgânicas, nossa equipe está pronta para tornar isso realidade! O plantio e replantio ganham vida com o toque especial dos nossos especialistas, que não só cultivam plantas, mas criam ambientes vibrantes e cheios de vida.'
            />

            <ArticleBeneficios
              urlImg={servico2}
              altImg='Imagem de várias comidas em uma mesa'
              title='Controle de pragas e enfermidades'
              text='Nossos profissionais não apenas conhecem o significado de "Proteção" mas sim a linguagem secreta das plantas. Com expertise em controle de pragas e enfermidades, eles protegem seu jardim como guardiões dedicados.'
            />

            <ArticleBeneficios
              urlImg={servico3}
              altImg='Imagem de várias comidas em uma mesa'
              title='Manutenção e fertilização'
              text='Imagine uma Horta que sempre pareceu saído de uma revista de jardinagem - agora, pare de imaginar e comece a viver essa realidade! Com a manutenção e fertilização especializada dos nossos profissionais, seu espaço verde será constantemente nutrido e mimado.'
            />
          </div>
        </div>
      </div>

      <div>
       

        <div className='banner-horticultor'>

          <div className='box-selects'>
           
          <h2 className='titulo-banner-horticultor'>
          Encontre <span>agora</span> o profissional ideal para{' '}
          <span>você</span>
        </h2>

            <h3>
              Consulte agora um <span>horticultor</span> e solicite um orçamento
              de forma totalmente <span>gratuita</span>:
            </h3>

                <select className='selects'>
                  <option value='default' disabled selected>
                    Selecione o tipo de serviço</option>
                  <option value='plantio'>Plantio</option>
                  <option value='cultivo'>Cultivo</option>
                  <option value='manutencao'>Manutenção</option>
                  <option value='fertilizacao'>Fertilização do solo</option>
                  <option value='sistema de irrigacao'>Sistema de irrigação</option>
                  <option value='pragas'>Controle de pragas</option>
                </select>
       

             
                <input
                  type='number'
                  name='CEP'
                  value={CEP}
                  onChange={handleChange}
                  placeholder='Digite seu CEP'
                />
         
            

            <button onClick={() => navigate('/vitrine-horticultores')}>
              Consultar profissionais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contrate;
