import React from 'react';
import './trabalheConosco.css';

import CustoBeneficio from '../../images/custo-beneficio-trabalhe-conosco.svg';

import BeneficiosParaVoce from '../../components/BeneficiosParaVoce/BeneficiosParaVoce';
import PassoApasso from '../../components/PassoApasso/PassoApasso';
import CardOferecemos from '../../components/CardOferecemos/CardOferecemos';
import CardPlanos from '../../components/CardPlanos/CardPlanos';

import img1 from '../../images/imgemBeneficio1.svg';
import img2 from '../../images/imagemBeneficio2.svg';
import img3 from '../../images/imagemBeneficio3.svg';
import passo1 from '../../images/PassoApasso1.svg';
import passo2 from '../../images/PassoApasso2.svg';
import passo3 from '../../images/PassoApasso3.svg';

function TrabalheConosco() {
  return (
    <div>
      <div className="banner-trabalhe-conosco">
        <h1>
          Conquiste <span>novos clientes</span> divulgando seu trabalho na nossa{' '}
          <span>plataforma</span>
        </h1>
        <div className="botoes-trabalhe-conosco">
          <button>Cadastre-se</button>
          <button>Profissionais</button>
        </div>
      </div>

      <div className="main-container-limitador">
       
        <h2>Benefícios para você</h2>
        
        <div className="ElementoComponente">
          <BeneficiosParaVoce
            urlImg={img1}
            altImg="beneficio1"
            titulo="Aumente sua visibilidade"
            texto="Nossa plataforma te conecta com uma audiência diária de centenas de pessoas."
          />
          <BeneficiosParaVoce
            urlImg={img2}
            altImg="beneficio1"
            titulo="Sem comissão"
            texto="Não cobramos comissões dos serviços realizados, 100% do valor fica com você!."
          />
          <BeneficiosParaVoce
            urlImg={img3}
            altImg="beneficio1"
            titulo="Contato direto"
            texto="Converse e negocie diretamente, sem intermediadores, sem taxas e sem burocracia."
          />
        </div>

        <div className="area-oferecemos">
         
          <div className="box-oferecemos">
            <div>
              <CardOferecemos text="Perfil personalizado" />
              <CardOferecemos text="Galeria de fotos e Portfólio" />
            </div>

            <div>
              <CardOferecemos text="Chat integrado" />
              <CardOferecemos text="Divulgação do Whatsap" />
            </div>
          </div>
        </div>


        <div className="custoBeneficio">
          <img src={CustoBeneficio} alt="" />
          <div>
            <h2>Custo beneficio e acesso ao seu publico alvo</h2>
            <p>
              Invista apenas R$ xx,xx por mês e impulsione suas receitas com a
              atração de novos clientes, nossa plataforma é acessada diariamente
              por pessoas engajadas e envolvidas em práticas sustentáveis.
            </p>
            <a href="#">
              <button>Quero me cadastrar!</button>
            </a>
          </div>
        </div>
      </div>

      <div className="banner-teste-gratis">
        <div>
          <p>TESTE NOSSA PLATAFORMA DURANTE</p>
          <h1>30 DIAS GRÁTIS</h1>
          <p>E RECEBA INÚMERAS OPORTUNIDADES DE TRABALHO!</p>
        </div>
      </div>

      <div className="main-container-limitador">
        <div className="passo-a-passo">
          <PassoApasso
            titulo={[
              <sapn className="color-passo-a-passo" key={1}>
                Faça
              </sapn>,
              ' o login',
            ]}
            srcImg={passo1}
            altImg="oi"
          />

          <PassoApasso
            titulo={[
              <sapn className="color-passo-a-passo" key={2}>
                Complete
              </sapn>,
              ' seu cadastro',
            ]}
            srcImg={passo2}
            altImg="oi"
          />

          <PassoApasso
            titulo={[
              'Feche ',
              <sapn className="color-passo-a-passo" key={3}>
                trabalhos
              </sapn>,
              ' a vontade',
            ]}
            srcImg={passo3}
            altImg="oi"
          />
        </div>

     
        <div className="section-planos">
          <h2>
            <span>Conheça</span> nossos planos
          </h2>
          <div className="box-planos">
            <CardPlanos
              nomePlano="Plano Anual"
              precoPlano={['R$399,90', <span key={1}>/mês</span>]}
              texto="O plano anual é a melhor opção para você que busca o melhor custo sem preocupação de renovar ."
            />
            <CardPlanos
              nomePlano="Plano Mensal"
              precoPlano={['R$39,90', <span key={2}>/mês</span>]}
              texto="Nosso plano mensal é uma boa opção para você que quer experimentar nossa plataforma.
              "
            />
            <CardPlanos
              nomePlano="Plano Semestral"
              precoPlano={['R$199,90', <span key={3}>/mês</span>]}
              texto="O plano semestral é um intermédio entre os outros planos para você que precisa de flexibilidade."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrabalheConosco;
