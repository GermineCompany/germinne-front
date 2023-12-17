import React from 'react';
import Pedidos from '../Pedidos/Pedidos';
import Imagem from '../../images/ImagemVaso.svg';
import './perfilPedido.css';

function PerfilPedido() {
  return (
    <div className="ConteudoDireito">
      <h2>Visualize o <span> Status </span> do seu pedido</h2>

      <div className="pedidos">
        <Pedidos
          srcImg={Imagem}
          altImg="Foto do vaso"
        />
        <Pedidos
          srcImg={Imagem}
          altImg="Foto do vaso"
        />

      </div>
    </div>
  );
}

export default PerfilPedido;