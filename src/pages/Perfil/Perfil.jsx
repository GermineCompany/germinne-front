import React, { useContext, useEffect, useState } from "react";
import { LuMessagesSquare, LuMapPin, LuInbox } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoMdExit } from "react-icons/io";
import "./perfil.css";
import EditarPerfilVitrine from "../../components/EditarPerfilVitrine/EditarPerfilVitrine";
import GerminneContext from "../../context/GerminneContext.jsx";
import DadosPessoaisCliente from "../../components/DadosPessoaisCliente/DadosPessoaisCliente.jsx";
import VerificacaoProfissional from "../../components/VerificacaoProfissional/VerificacaoProfissional.jsx";
import EnderecoPerfil from "../../components/EnderecoPerfil/EnderecoPerfil.jsx";
import PerfilPedido from "../../components/PerfilPedidos/PerfilPedido.jsx";
import api from "../../utils/axios";
import Chat from "../../components/Chat/Chat.jsx";

function Perfil() {
  const { loggedUser } = useContext(GerminneContext);
  const [menusActived, setMenusActived] = useState({
    mensagens: false,
    dadosPessoais: true,
    enderecos: false,
    pedidos: false,
  });
  const [profissionalInfo, setProfissionalInfo] = useState({
    rg: "",
  });

  const handleClickMenu = (event) => {
    setMenusActived({
      mensagens: false,
      dadosPessoais: false,
      enderecos: false,
      pedidos: false,
      [event.target.id]: true,
    });
  };

  const getProfissionalInfo = async () => {
    const response = await api.get(`/profissional/${loggedUser.id}`);

    response.data && setProfissionalInfo({ rg: response.data.rg });
  };

  useEffect(() => {
    getProfissionalInfo();
    console.log(loggedUser);
  }, [loggedUser]);

  return (
    <div className="perfil">
      <aside className="menu-lateral-perfil">
        <h3>
          Olá, <span>{loggedUser.nome}</span>!
        </h3>

        <nav>
          <ul>
            <li
              onClick={handleClickMenu}
              id="mensagens"
              className={`${menusActived.mensagens && "menuActived"}`}
            >
              <LuMessagesSquare /> Mensagens
            </li>
            <li
              onClick={handleClickMenu}
              id="dadosPessoais"
              className={`${menusActived.dadosPessoais && "menuActived"}`}
            >
              <CgProfile /> Dados pessoais
            </li>
            <li
              onClick={handleClickMenu}
              id="enderecos"
              className={`${menusActived.enderecos && "menuActived"}`}
            >
              <LuMapPin /> Endereços
            </li>
            {loggedUser.tipo == "cliente" && (
              <li
                onClick={handleClickMenu}
                id="pedidos"
                className={`${menusActived.pedidos && "menuActived"}`}
              >
                <LuInbox /> Pedidos
              </li>
            )}
            <li>
              <IoMdExit /> Sair
            </li>
          </ul>
        </nav>
      </aside>

      <div className="component-renderizado">
        {menusActived.mensagens && <Chat />}
        {/* <VerificacaoProfissional /> */}

        {menusActived.dadosPessoais && loggedUser.tipo == "cliente" && (
          <DadosPessoaisCliente />
        )}
        {menusActived.enderecos && <EnderecoPerfil />}
        {menusActived.pedidos && <PerfilPedido />}
        {menusActived.dadosPessoais &&
          loggedUser.tipo == "profissional" &&
          !profissionalInfo.rg && <VerificacaoProfissional />}
        {menusActived.dadosPessoais &&
          loggedUser.tipo == "profissional" &&
          profissionalInfo.rg && <EditarPerfilVitrine />}
        {/* <EditarPerfilVitrine /> */}
      </div>
    </div>
  );
}

export default Perfil;
