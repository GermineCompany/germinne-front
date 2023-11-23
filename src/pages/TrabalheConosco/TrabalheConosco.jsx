import React from "react";
import "./trabalheConosco.css";
import CustoBeneficio from "../../images/custo-beneficio-trabalhe-conosco.svg";

function TrabalheConosco() {
  return (
    <div className="box-trabalhe-conosco">
      <div className="banner-trabalhe-conosco">
        <div>
          <h1>
            Conquiste novos clientes divulgando seu trabalho na nossa plataforma
          </h1>
          <div className="botoes-trabalhe-conosco">
            <button>Cadastre-se</button>
            <button>Profissionais</button>
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
            <button>Quero me cadastrar</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrabalheConosco;
