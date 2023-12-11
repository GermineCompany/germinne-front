
import React from 'react';
import './Pedidos.css';
import PropTypes from 'prop-types';

function Pedidos(props) {
  return (
    <div className="pedidos-container">
      <div className="imagem-container">
        <img src={props.srcImg} alt={props.altImg} />
      </div>
      <div className='Descricao'>
        <h3>Data da Compra: <span>20/12/2023</span></h3>
        <p>Germinne Box</p>
        <p>Entrega ate 15/12/2023</p>
        <p>01 Unidade</p>

        <div className='Pedido'>
          <p>Numero do Pedido:</p>
        </div>

      </div>
      <div className='Botoes-Compra'>
        <div>
          <a href=""><button className="botoes1">Avaliação</button></a>
          <a href=""><button className="botoes2">Comprar Novamente</button></a>
        </div>
      </div>
    </div>
  );

}
Pedidos.propTypes = {
  srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


export default Pedidos;
