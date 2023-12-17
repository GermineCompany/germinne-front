import React from 'react';
import './facaParte.css';

// import CustoBeneficio from '../../images/custo-beneficio-trabalhe-conosco.svg';

import BeneficiosParaVoce from '../../components/BeneficiosParaVoce/BeneficiosParaVoce';
import PassoApasso from '../../components/PassoApasso/PassoApasso';
import CardPlanos from '../../components/CardPlanos/CardPlanos';
import Carousel from '../../components/Carousel/Carousel';

function FacaParte() {
  return (
    <div>
      <div className="banner-faca-parte">
        <h2>CUSTO BENEFÍCIO E ACESSO AO SEU <span>PÚBLICO</span> ALVO</h2>
        <p>Impulsione suas receitas com a atração de novos clientes. Nossa plataforma é acessada diariamente por pessoas engajadas e envolvidas na prática da horticultura.</p>
        <button>Cadastre-se</button>
      </div>

      <div className="main-container-limitador">

        <h2>Descubra como funciona</h2>

        <div className="passo-a-passo">

          <div>
            <PassoApasso
              titulo='Passo 1'
              srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/iconepasso1.svg"
              altImg="icone passo 1"
              texto="Realize seu cadastro na plataforma"
            />
          </div>
          <div className='barra-amarela'></div>

          <div>
            <PassoApasso
              titulo='Passo 2'
              srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/iconepasso2.svg"
              altImg="icone passo 2"
              texto="Complete seus dados e aguarde sua validação"
            />
          </div>

          <div className='barra-amarela'></div>

          <div>
            <PassoApasso
              titulo='Passo 3'
              srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/iconepasso3.svg"
              altImg="icone passo 3"
              texto="Pronto! agora você pode fechar trabalhos a vontade"
            />
          </div>
        </div>

        <div className="carousel-passo-a-passo">
          <Carousel

            slide1={
              <PassoApasso
                titulo='Passo 1'
                srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/iconepasso1.svg"
                altImg="icone passo 1"
                texto="Realize seu cadastro na plataforma"
              />
            }

            slide2={
              <PassoApasso
                titulo='Passo 2'
                srcImg="hhttps://germinnecomp-img.s3.sa-east-1.amazonaws.com/iconepasso2.svg"
                altImg="icone passo 2"
                texto="Complete seus dados e aguarde sua validação"
              />
            }

            slide3={
              <PassoApasso
                titulo='Passo 3'
                srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/iconepasso3.svg"
                altImg="icone passo 3"
                texto="Pronto! agora você pode fechar trabalhos a vontade"
              />
            }
          />
        </div>

        <div className="banner-teste-gratis">
          <p>TESTE DURANTE</p>
          <h2>30 DIAS GRÁTIS</h2>
          <p>CADASTRE-SE, APROVEITE NOSSA PLATAFORMA E RECEBA INÚMERAS OPORTUNIDADES DE TRABALHOS!</p>
        </div>


        <h2>Benefícios para você</h2>

        <div className="beneficios-profissional">
          <BeneficiosParaVoce
            srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/beneficios1.svg"
            altImg="Icone beneficio 1"
            titulo="Aumente sua visibilidade"
            texto="Nossa plataforma te conecta com uma audiência diária de centenas de pessoas."
          />

          <BeneficiosParaVoce
            srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/beneficios2.svg"
            altImg="Icone beneficio 2"
            titulo="Sem comissão"
            texto="Não cobramos comissões dos serviços realizados, 100% do valor fica com você!"
          />

          <BeneficiosParaVoce
            srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/beneficios3.svg"
            altImg="Icone beneficio 3"
            titulo="Contato direto"
            texto="Converse e negocie diretamente, sem intermediadores, sem taxas e sem burocracia."
          />

          <BeneficiosParaVoce
            srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/beneficios4.svg"
            altImg="Icone beneficio 4"
            titulo="Personalize seu perfil"
            texto="Lá você terá opções para melhores filtros e fácil descoberta."
          />

          <BeneficiosParaVoce
            srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/beneficios5.svg"
            altImg="Icone beneficio 5"
            titulo="Galeria de fotos e portifólio"
            texto="No seu perfil é possível colocar trabalhos anteriores, com descrições e imagens."
          />

          <BeneficiosParaVoce
            srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/beneficios6.svg"
            altImg="Icone beneficio 6"
            titulo="Chat integrado"
            texto="Feche negócios direto pela plataforma, gerenciando as conversas com seus cleintes."
          />
        </div>




        <div className="carousel-beneficios">
          <Carousel
            slide1={
              <BeneficiosParaVoce
                srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/beneficios1.svg"
                altImg="Icone beneficio 1"
                titulo="Aumente sua visibilidade"
                texto="Nossa plataforma te conecta com uma audiência diária de centenas de pessoas."
              />
            }
            slide2={
              <BeneficiosParaVoce
                srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/beneficios2.svg"
                altImg="Icone beneficio 2"
                titulo="Sem comissão"
                texto="Não cobramos comissões dos serviços realizados, 100% do valor fica com você!"
              />
            }
            slide3={
              <BeneficiosParaVoce
                srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/beneficios3.svg"
                altImg="Icone beneficio 3"
                titulo="Contato direto"
                texto="Converse e negocie diretamente, sem intermediadores, sem taxas e sem burocracia."
              />
            }

            slide4={<BeneficiosParaVoce
              srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/beneficios4.svg"
              altImg="Icone beneficio 4"
              titulo="Personalize seu perfil"
              texto="Lá você terá opções para melhores filtros e fácil descoberta."
            />}

            slide5={<BeneficiosParaVoce
              srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/beneficios5.svg"
              altImg="Icone beneficio 5"
              titulo="Galeria de fotos e portifólio"
              texto="No seu perfil é possível colocar trabalhos anteriores, com descrições e imagens."
            />}

            slide6={<BeneficiosParaVoce
              srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/beneficios6.svg"
              altImg="Icone beneficio 6"
              titulo="Chat integrado"
              texto="Feche negócios direto pela plataforma, gerenciando as conversas com seus cleintes."
            />}

          />

        </div>

        <div className="box-titulo-planos">
          <h2>
            <span>Conheça</span> nossos planos
          </h2>
          <div className="box-planos">
            <CardPlanos
              nomePlano="Plano Anual"
              precoPlano={['R$389,99', <span key={1}>/ano</span>]}
              texto="O plano anual é a melhor opção para você que busca o melhor custo sem preocupação de renovar ."
            />
            <CardPlanos
              nomePlano="Plano Mensal"
              precoPlano={['R$34,99', <span key={2}>/mês</span>]}
              texto="Nosso plano mensal é uma boa opção para você que quer experimentar nossa plataforma.
              "
            />
            <CardPlanos
              nomePlano="Plano Semestral"
              precoPlano={['R$199,99', <span key={3}>/3meses</span>]}
              texto="O plano semestral é um intermédio entre os outros planos para você que precisa de flexibilidade."
            />
          </div>

          <div className="carousel-planos">
            <Carousel
              slide1={
                <CardPlanos
                  nomePlano="Plano Anual"
                  precoPlano={['R$389,99', <span key={1}>/ano</span>]}
                  texto="O plano anual é a melhor opção para você que busca o melhor custo sem preocupação de renovar ."
                />
              }
              slide2={
                <CardPlanos
                  nomePlano="Plano Mensal"
                  precoPlano={['R$34,99', <span key={2}>/mês</span>]}
                  texto="Nosso plano mensal é uma boa opção para você que quer experimentar nossa plataforma.
                "
                />
              }
              slide3={
                <CardPlanos
                  nomePlano="Plano Semestral"
                  precoPlano={['R$199,99', <span key={3}>/3meses</span>]}
                  texto="O plano semestral é um intermédio entre os outros planos para você que precisa de flexibilidade."
                />
              }
            />
          </div>
        </div>

      </div>

    </div>
  );
}

export default FacaParte;
