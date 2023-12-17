import React, { useContext, useEffect, useState } from 'react';
import Pedidos from '../Pedidos/Pedidos';
import './perfilPedido.css';
import GerminneContext from '../../context/GerminneContext';
import api from '../../utils/axios';

function PerfilPedido() {
  const { loggedUser: { id } } = useContext(GerminneContext);
  const [userInfo, setUserInfo] = useState(false);

  const getClienteInfos = async () => {
    const result = await api.get(`/cliente/${id}`);

    if (result.data.clientePedidos.length > 0) { 
      setUserInfo([result.data.clientePedidos]);
    }
  };

  useEffect(() => {
    getClienteInfos();
  }, [id]);

  return (
    <div className="ConteudoDireito">
      <h2>Visualize o <span>Status</span> do seu pedido</h2>

      <div className="pedidos">
        {
          !userInfo.length ? 
            <div className='pedidos-compre-agora'>
              <h3>Você ainda não fez nenhum pedido...</h3>
              <h3><a href="/loja">Compre agora!</a></h3>
            </div>
            : userInfo[0].map((pedido) => {
              const data = new Date(pedido.data);
              return (
                <Pedidos
                  key={pedido.idPedido}
                  srcImg={pedido.imagemProduto}
                  altImg="Foto do vaso"
                  data={`${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`}
                  produto={pedido.produto}
                  entregaAte={`${data.getDate() + 4}/${data.getMonth()}/${data.getFullYear()}`}
                  quantidade={pedido.quantidade}
                  numeroPedido={`#${pedido.idPedido}`}
                  valor={(pedido.precoProduto * pedido.quantidade).toString().replace('.', ',')}
                />
              );
            })
        }
      </div>
    </div>
  );
}

export default PerfilPedido;