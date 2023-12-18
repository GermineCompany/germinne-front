import React from "react";
import Pedidos from "../Pedidos/Pedidos";
import Imagem from "../../images/ImagemVaso.svg";
import "./perfilPedido.css";
import GerminneContext from "../../context/GerminneContext";
import { useContext } from "react";
import { useEffect } from "react";
import api from "../../utils/axios";
import { useState } from "react";

function PerfilPedido() {
  const { loggedUser } = useContext(GerminneContext);
  const [pedidos, setPedidos] = useState(false);

  const getPedidos = async () => {
    const todosPedidos = await api.get(`/cliente/${loggedUser.id}`);
    setPedidos(todosPedidos.data.clientePedidos);
  };

  useEffect(() => {
    getPedidos();
  }, []);
  return (
    <div className="ConteudoDireito">
      <h2>
        Visualize o <span> Status </span> do seu pedido
      </h2>

      <div className="pedidos">
        {pedidos &&
          pedidos.map(
            ({
              idPedido,
              data,
              statusPedido,
              imagemProduto,
              precoProduto,
              quantidade,
            }) => {
              const dataFormated = new Date(data);
              return (
                <Pedidos
                  key={idPedido}
                  srcImg={imagemProduto}
                  data={`${dataFormated.getDate()}/${dataFormated.getMonth()}/${dataFormated.getFullYear()}`}
                  numeroPedido={idPedido}
                  produto={statusPedido}
                  entregaAte={`${
                    dataFormated.getDate() + 4
                  }/${dataFormated.getMonth()}/${dataFormated.getFullYear()}`}
                  quantidade={quantidade}
                  valor={precoProduto * quantidade}
                />
              );
            }
          )}
      </div>
    </div>
  );
}

export default PerfilPedido;
