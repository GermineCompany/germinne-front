import React from "react";
import "./trabalheConosco.css";
import BeneficiosParaVoce from "../../components/BeneficiosParaVoce/BeneficiosParaVoce";
import img1 from "../../images/img-beneficio1.svg"
import img2 from "../../images/imagemBeneficio2.svg"
import img3 from "../../images/imagemBeneficio3.svg"

function TrabalheConosco() {
  return (
    <div>
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
  
    </div>
  );
}

export default TrabalheConosco;
