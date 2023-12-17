import React, { useContext, useEffect, useState } from 'react';
import '../DadosPessoaisCliente/dadosPessoaisCliente.css';
import GerminneContext from '../../context/GerminneContext';
import api from '../../utils/axios';

function EnderecoPerfil() {
  const { loggedUser: { id } } = useContext(GerminneContext);
  const [userInfo, setUserInfo] = useState({});
  const [inputStatus, setInputStatus] = useState(true);
  const [nameButton, setNameButton] = useState('Editar informações');
  const [inputInfos, setInputInfos] = useState({
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    pais: '',
    numero: '',
  });
  const [message, setMessage] = useState('');

  const getClienteInfos = async () => {
    const result = await api.get(`/cliente/${id}`);

    setUserInfo(result.data);
    setInputInfos({
      cep: result.data.endereco.cep,
      rua: result.data.endereco.rua,
      bairro: result.data.endereco.bairro,
      cidade: result.data.endereco.cidade,
      pais: result.data.endereco.pais,
      numero: result.data.endereco.numero,
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
        const result = await api.put(`/cliente/${id}/endereco`, inputInfos);
        setMessage(result.data.message);

        setTimeout(() => {
          setMessage('');
          setNameButton('Editar informações');
          setInputStatus(true);
          getClienteInfos();
        }, 1500);
      } catch (error) {
        setMessage(error.response.data.message);
      }
    }
  };

  const handleChange = async (event) => {
    setInputInfos({ ...inputInfos, [event.target.id]: event.target.value });

    if (event.target.id == 'cep' && event.target.value.length == 8) {
      const result = await getVIACEP(event.target.value);
      setInputInfos({
        ...inputInfos,
        cep: result.cep,
        rua: result.logradouro,
        bairro: result.bairro,
        cidade: result.localidade,
        pais: 'Brasil',
      });
    }
  };

  const getVIACEP = async (cep) => {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();
    return data;
  };

  return (
    <div className='dados-pessoais-cliente'>
      <h2>Dados pessoais</h2>

      <div className='inputs-dados-pessoais-cliente'>
        <div>
          <label htmlFor="cep">
            CEP
            <input
              disabled={inputStatus}
              placeholder={userInfo.cep || 'Adicione um CEP...'}
              onChange={handleChange}
              value={inputInfos.cep}
              type="text"
              name="cep"
              id="cep"
            />
          </label>

          <label htmlFor="rua">
            Rua
            <input
              disabled={inputStatus}
              placeholder={userInfo.rua || 'Adicione uma rua...'}
              onChange={handleChange}
              value={inputInfos.rua}
              type="text"
              name="rua"
              id="rua"
            />
          </label>
        </div>

        <div>
          <label htmlFor="numero">
            Número e complemento
            <input
              disabled={inputStatus}
              placeholder={userInfo.numero || 'Adicione um número e complemento...'}
              onChange={handleChange}
              value={inputInfos.numero}
              type="text"
              name="numero"
              id="numero"
            />
          </label>

          <label htmlFor="bairro">
            Bairro
            <input disabled={inputStatus}
              placeholder={userInfo.bairro || 'Adicione um bairro...'}
              onChange={handleChange}
              value={inputInfos.bairro}
              type="text"
              name="bairro"
              id="bairro"
            />
          </label>
        </div>

        <div>
          <label htmlFor="cidade">
            Cidade
            <input
              disabled={inputStatus}
              placeholder={userInfo.cidade || 'Adicione uma cidade...' }
              onChange={handleChange}
              value={inputInfos.cidade}
              type="text"
              name="cidade"
              id="cidade"
            />
          </label>

          <label htmlFor="pais">
            País
            <input disabled={inputStatus}
              placeholder={userInfo.pais || 'Adicione um telefone...'}
              onChange={handleChange}
              value={inputInfos.pais}
              type="text"
              name="pais"
              id="pais"
            />
          </label>
        </div>
      </div>

      <div className='mensagem-editar-perfil-cliente'>
        <p>{message}</p>
      </div>

      <div className={`${nameButton == 'Editar informações' ? 'box-button-perfil-cliente' : 'box-button-perfil-cliente button-salvar-informacoes'}`}>
        <button onClick={handleEditInfo}>{nameButton}</button>
      </div>
    </div>
  );
}

export default EnderecoPerfil;