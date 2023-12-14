import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GerminneContext from './GerminneContext.jsx';
import api from '../utils/axios.js';

const GerminneProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState({
    logged: false,
    nomeUsuario: '',
    idUsuario: ''
  });
    
  const verifyUserLogin = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log(userInfo);

    if (userInfo) {
      const infosAPI = await api.get(`/cliente/${userInfo.idCliente}`);
      console.log(infosAPI, 'dddddddddd');
      setLoggedUser(prevState => ({ 
        ...prevState, 
        logged: true, 
        idUsuario: infosAPI.idUsuario, 
        nomeUsuario: userInfo.nomeCliente 
      }));
    }
  };
    
  useEffect(() => {
    verifyUserLogin();
  }, []);

  const context = {
    loggedUser
  };

  return (
    <GerminneContext.Provider value={context}>
      {children}
    </GerminneContext.Provider>
  );
};

GerminneProvider.propTypes = {
  children: PropTypes.node,
};

export default GerminneProvider;
