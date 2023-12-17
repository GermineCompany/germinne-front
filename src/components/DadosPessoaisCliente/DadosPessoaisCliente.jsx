import React, { useContext, useEffect, useState } from 'react';
import './dadosPessoaisCliente.css';
import GerminneContext from '../../context/GerminneContext';
import api from '../../utils/axios';

function DadosPessoaisCliente() {
  const { loggedUser: { id } } = useContext(GerminneContext);
  const [userInfo, setUserInfo] = useState({});
  const [inputStatus, setInputStatus] = useState(true);
  const [nameButton, setNameButton] = useState('Editar informações');
  const [inputInfos, setInputInfos] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: ''
  });
  const [message, setMessage] = useState('');

  const getClienteInfos = async () => {
    console.log(id);
    const result = await api.get(`/cliente/${id}`);

    setUserInfo(result.data);
    setInputInfos({
      nome: result.data.nome,
      sobrenome: result.data.sobrenome,
      email: result.data.email,
      telefone: result.data.telefone
    });
  };

  useEffect(() => {
    getClienteInfos();
  }, [id]);

  const handleEditInfo = async () => {
    setInputStatus(false);
    setNameButton('Salvar informações');

    if (nameButton == 'Salvar informações') {
      try {
        const result = await api.put(`/cliente/${id}`, inputInfos);
        setMessage(result.data.message);

        setTimeout(() => { 
          setMessage(''); 
          setNameButton('Editar informações');
          setInputStatus(true);
          getClienteInfos();
        }, 1500);
      } catch(error) {
        setMessage(error.response.data.message);
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
              placeholder={userInfo.telefone || 'Adicione um telefone...'}
              onChange={handleChange}
              value={inputInfos.telefone}
              type="text" 
              name="telefone"
              id="telefone"
            />
          </label>
        </div>
      </div>

      <div className='mensagem-editar-perfil-cliente'>
        <p>{message}</p>
      </div>

      <div className={`${nameButton == 'Editar informações' ? 'box-button-perfil-cliente' : 'box-button-perfil-cliente button-salvar-informacoes'}`}>
        <button onClick={handleEditInfo}>{ nameButton }</button>
      </div>
    </div>
  );
}

export default DadosPessoaisCliente;