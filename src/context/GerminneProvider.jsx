import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GerminneContext from './GerminneContext.jsx';

const GerminneProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState({});

  const [checkoutInfo, setCheckoutInfo] = useState({
    sementes: [],
    quantidade: 0,
    produto: ''
  });
    
  const verifyUserLogin = async () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (userInfo) {
      setLoggedUser(userInfo);
    }
  };

  useEffect(() => {
    verifyUserLogin();
  }, []);

  const context = {
    loggedUser,
    checkout: {
      checkoutInfo, setCheckoutInfo
    }
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
