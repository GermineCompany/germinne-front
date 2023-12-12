import React, { useContext, useState } from 'react';
import { LuMessagesSquare, LuMapPin, LuInbox } from 'react-icons/lu';
import { CgProfile } from 'react-icons/cg';
import { IoMdExit } from 'react-icons/io';
import './perfil.css';
import EditarPerfilVitrine from '../../components/EditarPerfilVitrine/EditarPerfilVitrine';
import GerminneContext from '../../context/GerminneContext.jsx';

function Perfil() {
  const { loggedUser } = useContext(GerminneContext);
  const [menusActived, setMenusActived] = useState({
    mensagens: false,
    dadosPessoais: true,
    enderecos: false,
    pedidos: false,
  });

  const handleClickMenu = (event) => {
    setMenusActived({
      mensagens: false,
      dadosPessoais: false,
      enderecos: false,
      pedidos: false,
      [event.target.id]: true
    });
  };

  return (
    <div className='perfil'>
      <aside className='menu-lateral-perfil'>
        <h3>Olá, <span>{ loggedUser.nomeUsuario }</span>!</h3>

        <nav>
          <ul>
            <li onClick={handleClickMenu} id='mensagens' className={`${menusActived.mensagens && 'menuActived'}`}><LuMessagesSquare /> Mensagens</li>
            <li onClick={handleClickMenu} id='dadosPessoais' className={`${menusActived.dadosPessoais && 'menuActived'}`}><CgProfile /> Dados pessoais</li>
            <li onClick={handleClickMenu} id='enderecos' className={`${menusActived.enderecos && 'menuActived'}`}><LuMapPin /> Endereços</li>
            <li onClick={handleClickMenu} id='pedidos' className={`${menusActived.pedidos && 'menuActived'}`}><LuInbox /> Pedidos</li>
            <li><IoMdExit /> Sair</li>
          </ul>
        </nav>
      </aside>

      <div className='component-renderizado'>
        {

        }
        <EditarPerfilVitrine />
      </div>
    </div>
  );
}

export default Perfil;