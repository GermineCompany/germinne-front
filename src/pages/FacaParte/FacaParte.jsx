import React from "react";
import "./facaParte.css";

import CustoBeneficio from "../../images/custo-beneficio-trabalhe-conosco.svg";

import BeneficiosParaVoce from "../../components/BeneficiosParaVoce/BeneficiosParaVoce";
import PassoApasso from "../../components/PassoApasso/PassoApasso";
import CardPlanos from "../../components/CardPlanos/CardPlanos";

import img1 from "../../images/imgemBeneficio1.svg";
import img2 from "../../images/imagemBeneficio2.svg";
import img3 from "../../images/imagemBeneficio3.svg";
import img4 from "../../images/imagemBeneficio4.svg";
import img5 from "../../images/imagemBeneficio5.svg";
import img6 from "../../images/imagemBeneficio6.svg";
import passo1 from "../../images/PassoApasso1.svg";
import passo2 from "../../images/PassoApasso2.svg";
import passo3 from "../../images/PassoApasso3.svg";
import Carousel from "../../components/Carousel/Carousel";

function TrabalheConosco() {
  return (
    <div>
      <div className="main-container-limitador">
        <h2>Benefícios para você</h2>

        <div className="ElementoComponente">
          <BeneficiosParaVoce
            urlImg={img1}
            altImg="beneficio1"
            titulo="Aumente sua visibilidade"
            texto="Nossa plataforma te conecta com uma audiência diária de centenas de pessoas."
            urlImg2={img4}
            altImg2="beneficio1"
            titulo2="Personalize seu perfil"
            texto2="Lá você terá opções para melhores filtros e fácil descoberta."
          />
          <BeneficiosParaVoce
            urlImg={img2}
            altImg="beneficio1"
            titulo="Sem comissão"
            texto="Não cobramos comissões dos serviços realizados, 100% do valor fica com você!."
            urlImg2={img5}
            altImg2="beneficio1"
            titulo2="Aumente sua visibilidade"
            texto2="Nossa plataforma te conecta com uma audiência diária de centenas de pessoas."
          />
          <BeneficiosParaVoce
            urlImg={img3}
            altImg="beneficio1"
            titulo="Contato direto"
            texto="Converse e negocie diretamente, sem intermediadores, sem taxas e sem burocracia."
            urlImg2={img6}
            altImg2="beneficio1"
            titulo2="Aumente sua visibilidade"
            texto2="Nossa plataforma te conecta com uma audiência diária de centenas de pessoas."
          />
        </div>

        <div className="carousel-beneficios">
          <Carousel
            slide1={
              <BeneficiosParaVoce
                urlImg={img1}
                altImg="beneficio1"
                titulo="Aumente sua visibilidade"
                texto="Nossa plataforma te conecta com uma audiência diária de centenas de pessoas."
                urlImg2={img4}
                altImg2="beneficio1"
                titulo2="Personalize seu perfil"
                texto2="Lá você terá opções para melhores filtros e fácil descoberta."
              />
            }
            slide2={
              <BeneficiosParaVoce
                urlImg={img2}
                altImg="beneficio1"
                titulo="Sem comissão"
                texto="Não cobramos comissões dos serviços realizados, 100% do valor fica com você!."
                urlImg2={img5}
                altImg2="beneficio1"
                titulo2="Aumente sua visibilidade"
                texto2="Nossa plataforma te conecta com uma audiência diária de centenas de pessoas."
              />
            }
            slide3={
              <BeneficiosParaVoce
                urlImg={img3}
                altImg="beneficio1"
                titulo="Contato direto"
                texto="Converse e negocie diretamente, sem intermediadores, sem taxas e sem burocracia."
                urlImg2={img6}
                altImg2="beneficio1"
                titulo2="Aumente sua visibilidade"
                texto2="Nossa plataforma te conecta com uma audiência diária de centenas de pessoas."
              />
            }
          />
        </div>

        <div className="custoBeneficio">
          <img src={CustoBeneficio} alt="" />
          <div>
            <h2>Custo beneficio e acesso ao seu publico alvo</h2>
            <p>
              Invista apenas <strong>R$ 39,90</strong> por mês e impulsione suas
              receitas com a atração de novos clientes, nossa plataforma é
              acessada diariamente por pessoas engajadas e envolvidas em
              práticas sustentáveis.
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
              " o login",
            ]}
            srcImg={passo1}
            altImg="oi"
          />

          <PassoApasso
            titulo={[
              <sapn className="color-passo-a-passo" key={2}>
                Complete
              </sapn>,
              " seu cadastro",
            ]}
            srcImg={passo2}
            altImg="oi"
          />

          <PassoApasso
            titulo={[
              "Feche ",
              <sapn className="color-passo-a-passo" key={3}>
                trabalhos
              </sapn>,
              " a vontade",
            ]}
            srcImg={passo3}
            altImg="oi"
          />
        </div>

        <div className="carousel-passo-a-passo">
          <Carousel
            slide1={
              <PassoApasso
                titulo={[
                  <sapn className="color-passo-a-passo" key={1}>
                    Faça
                  </sapn>,
                  " o login",
                ]}
                srcImg={passo1}
                altImg="oi"
              />
            }
            slide2={
              <PassoApasso
                titulo={[
                  <sapn className="color-passo-a-passo" key={2}>
                    Complete
                  </sapn>,
                  " seu cadastro",
                ]}
                srcImg={passo2}
                altImg="oi"
              />
            }
            slide3={
              <PassoApasso
                titulo={[
                  "Feche ",
                  <sapn className="color-passo-a-passo" key={3}>
                    trabalhos
                  </sapn>,
                  " a vontade",
                ]}
                srcImg={passo3}
                altImg="oi"
              />
            }
          />
        </div>

        <div className="section-planos">
          <h2>
            <span>Conheça</span> nossos planos
          </h2>
          <div className="box-planos">
            <CardPlanos
              nomePlano="Plano Anual"
              precoPlano={["R$389,99", <span key={1}>/ano</span>]}
              texto="O plano anual é a melhor opção para você que busca o melhor custo sem preocupação de renovar ."
            />
            <CardPlanos
              nomePlano="Plano Mensal"
              precoPlano={["R$34,99", <span key={2}>/mês</span>]}
              texto="Nosso plano mensal é uma boa opção para você que quer experimentar nossa plataforma.
              "
            />
            <CardPlanos
              nomePlano="Plano Semestral"
              precoPlano={["R$199,99", <span key={3}>/3meses</span>]}
              texto="O plano semestral é um intermédio entre os outros planos para você que precisa de flexibilidade."
            />
          </div>

          <div className="carousel-planos">
            <Carousel
              slide1={
                <CardPlanos
                  nomePlano="Plano Anual"
                  precoPlano={["R$389,99", <span key={1}>/ano</span>]}
                  texto="O plano anual é a melhor opção para você que busca o melhor custo sem preocupação de renovar ."
                />
              }
              slide2={
                <CardPlanos
                  nomePlano="Plano Mensal"
                  precoPlano={["R$34,99", <span key={2}>/mês</span>]}
                  texto="Nosso plano mensal é uma boa opção para você que quer experimentar nossa plataforma.
                "
                />
              }
              slide3={
                <CardPlanos
                  nomePlano="Plano Semestral"
                  precoPlano={["R$199,99", <span key={3}>/3meses</span>]}
                  texto="O plano semestral é um intermédio entre os outros planos para você que precisa de flexibilidade."
                />
              }
            />
          </div>
        </div>
      </div>

      <div className="banner-trabalhe-conosco">
        <div>
          <h1>
            Conquiste <span>novos clientes</span> divulgando seu trabalho na
            nossa
            <span> plataforma</span>
          </h1>
        </div>
        <div className="botoes-trabalhe-conosco">
          <button>Cadastre-se</button>
          <button>Profissionais</button>
        </div>
      </div>
    </div>
  );
}

export default TrabalheConosco;
