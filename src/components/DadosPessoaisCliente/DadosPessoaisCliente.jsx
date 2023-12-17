import React, { useContext, useEffect, useState } from 'react';
import './dadosPessoaisCliente.css';
import GerminneContext from '../../context/GerminneContext';
import api from '../../utils/axios';

function DadosPessoaisCliente() {
  const { loggedUser: { idUsuario } } = useContext(GerminneContext);
  const [userInfo, setUserInfo] = useState({});
  const [inputStatus, setInputStatus] = useState(true);
  const [nameButton, setNameButton] = useState('Editar informações');
  const [inputInfos, setInputInfos] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: ''
  });

  const getClienteInfos = async () => {
    const result = await api.get(`/cliente/${idUsuario}`);

    setUserInfo(result.data);
    // console.log(result.data);
  };

  useEffect(() => {
    getClienteInfos();
  }, [idUsuario]);

  const handleEditInfo = async () => {
    setInputStatus(false);
    setNameButton('Salvar informações');

    if (nameButton == 'Salvar informações') {
      try {
        const updateInfos = {
          nome: inputInfos.nome || userInfo.nome,
          sobrenome: inputInfos.sobrenome || userInfo.sobrenome,
          email: inputInfos.email || userInfo.email,
          telefone: inputInfos.telefone || userInfo.telefone,
        };
        const result = await api.put(`/cliente/${idUsuario}`, updateInfos);
        console.log(result);
      } catch(error) {
        console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    setInputInfos({...inputInfos, [event.target.id]: event.target.value });
  };
  return (
    <div className='dados-pessoais-cliente'>
      <h2>Dados pessoais</h2>

      <div className='inputs-dados-pessoais-cliente'>
        <div>
          <label htmlFor="nome">
            Nome
            <input 
              disabled={inputStatus}
              placeholder={userInfo.nome} 
              onChange={handleChange}
              value={inputInfos.nome}
              type="text"
              name="nome" 
              id="nome" 
            />
          </label>

          <label htmlFor="sobrenome">
            Sobrenome
            <input 
              disabled={inputStatus} 
              placeholder={userInfo.sobrenome}
              onChange={handleChange}
              value={inputInfos.sobrenome}
              type="text" 
              name="sobrenome"
              id="sobrenome"
            />
          </label>
        </div>

        <div>
          <label htmlFor="email">
            Email
            <input 
              disabled={inputStatus}
              placeholder={userInfo.email}
              onChange={handleChange}
              value={inputInfos.email}
              type="text"
              name="email" 
              id="email" 
            />
          </label>

          <label htmlFor="telefone">
            Telefone
            <input disabled={inputStatus}
              placeholder={userInfo.telefone}
              onChange={handleChange}
              value={inputInfos.telefone}
              type="text" 
              name="telefone"
              id="telefone"
            />
          </label>
        </div>
      </div>

      <div className={`${nameButton == 'Editar informações' ? 'box-button-perfil-cliente' : 'box-button-perfil-cliente button-salvar-informacoes'}`}>
        <button onClick={handleEditInfo}>{ nameButton }</button>
      </div>
    </div>
  );
}

export default DadosPessoaisCliente;