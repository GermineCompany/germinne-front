import React from 'react';
import { LuMessagesSquare, LuMapPin, LuInbox } from 'react-icons/lu';
import { CgProfile } from 'react-icons/cg';
import { IoMdExit } from 'react-icons/io';
import './perfil_Pedidos.css';
import Pedidos from '../../components/Pedidos/Pedidos';
import Imagem from '../../images/ImagemVaso.svg';

function Perfil_Enderecos() {
  return (
    <div className='ConteudoGeral'>
      <div className="conteudoEsquerdo">
        <aside className='menu-lateral-perfil'>
          <h3>Olá, <span> Germinne </span>!</h3>

          <nav>
            <ul>
              <li><LuMessagesSquare /> Mensagens</li>
              <li><CgProfile /> Dados pessoais</li>
              <li><LuMapPin /> Endereços</li>
              <li><LuInbox /> Pedidos</li>
              <li><IoMdExit /> Sair</li>
            </ul>
          </nav>
        </aside>

      </div>
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

    </div>
  );
}

export default Perfil_Enderecos;