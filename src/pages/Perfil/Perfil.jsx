import React from 'react';
import { LuMessagesSquare, LuMapPin, LuInbox } from 'react-icons/lu';
import { CgProfile } from 'react-icons/cg';
import { IoMdExit } from 'react-icons/io';
import './perfil.css';

function Perfil() {
  return (
    <div>
      <aside className='menu-lateral-perfil'>
        <h3>Olá, <span>Germinne</span>!</h3>

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

      <div>
        
      </div>
    </div>
  );
}

export default Perfil;