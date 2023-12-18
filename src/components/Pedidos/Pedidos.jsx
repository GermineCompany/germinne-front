import React from "react";
import "./Pedidos.css";
import PropTypes from "prop-types";

function Pedidos({
  srcImg,
  data,
  produto,
  entregaAte,
  quantidade,
  numeroPedido,
  valor,
}) {
  return (
    <div className="pedidos-container">
      <div className="imagem-container">
        <img src={srcImg} alt="Imagem do produto comprado" />
      </div>
      <div className="Descricao">
        <div>
          <h3>
            Data da Compra: <span> {data} </span>
          </h3>
        </div>

        <div>
          <p>{produto}</p>
          <p>Entrega até: {entregaAte}</p>
          <p>
            {quantidade} {quantidade == 1 ? "Unidade" : "Unidades"}
          </p>
          <p>Valor: R$ {valor}</p>
        </div>

        <div className="Pedido">
          <p>Número do pedido: {numeroPedido}</p>
        </div>
      </div>
      <div className="Botoes-Compra">
        <div>
          <a href="/loja">
            <button className="botoes1">Avaliação</button>
          </a>
          <a href="/loja">
            <button className="botoes2">Comprar Novamente</button>
          </a>
        </div>
      </div>
    </div>
  );
}
Pedidos.propTypes = {
  srcImg: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  produto: PropTypes.string.isRequired,
  entregaAte: PropTypes.string.isRequired,
  quantidade: PropTypes.number.isRequired,
  numeroPedido: PropTypes.number.isRequired,
  valor: PropTypes.string.isRequired,
};

export default Pedidos;
