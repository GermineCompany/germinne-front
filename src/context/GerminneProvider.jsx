import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GerminneContext from './GerminneContext.jsx';

const GerminneProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState({
    logged: false,
    nomeUsuario: '',
    idUsuario: ''
  });
    
  const verifyUserLogin = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (userInfo) {
      setLoggedUser(prevState => ({ ...prevState, logged: true, idUsuario: userInfo.idCliente, nomeUsuario: userInfo.nomeCliente }));
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
