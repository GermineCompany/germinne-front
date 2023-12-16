import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import SobreNos from './pages/SobreNos/SobreNos';
import Blog from './pages/Blog/Blog';
import Login from './pages/Login/Login';
import CadastroProfissional from './pages/CadastroProfissional/CadastroProfissional';
import LoginCliente from './pages/LoginCliente/LoginCliente';
import CadastroCliente from './pages/CadastroCliente/CadastroCliente';
import Artigo from './pages/Artigo/Artigo';
import Loja from './pages/Loja/Loja';
import Contrate from './pages/Contrate/Contrate';
import VitrineHorticultores from './pages/VitrineHorticultores/VitrineHorticultores';
import Perfil from './pages/Perfil/Perfil';
import PerfilHorticultor from './pages/PerfilHorticultor/PerfilHorticultor';
import FiltrosServico from './pages/FiltrosServico/FiltrosServico';
import FacaParte from './pages/FacaParte/FacaParte';
import PortifolioHorticultor from './pages/PortifolioHorticultor/PortifolioHorticultor';
import Checkout from './pages/Checkout/Checkout';
// import TrabalheConosco from './pages/TrabalheConosco/TrabalheConosco';

function App() {
  const path = window.location.pathname;
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

  return (
    <BrowserRouter>
      {path != '/login' &&
        path != '/cadastro-profissional' &&
        path != '/login-cliente' &&
        path != '/cadastro-cliente' && <Header loggedUser={ loggedUser } />}
      <main>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/sobre-nos" Component={SobreNos} />
          <Route path="/blog" Component={Blog} />
          <Route path="/login" Component={Login} />
          <Route
            path="/cadastro-profissional"
            Component={CadastroProfissional}
          />
          <Route path="/login-cliente" Component={LoginCliente} />
          <Route path="/cadastro-cliente" Component={CadastroCliente} />
          <Route path="/artigo/:id" Component={Artigo} />
          <Route path="/loja" Component={Loja} />
          <Route path="/contrate" Component={Contrate} />
          <Route
            path="/vitrine-horticultores"
            Component={VitrineHorticultores}
          />
          <Route path="/perfil" Component={Perfil} />
          <Route path="/perfil-horticultor/:id" Component={PerfilHorticultor} />
          <Route path="/portifolio-horticultor" Component={PortifolioHorticultor} />
          <Route path="/filtros-servico" Component={FiltrosServico} />
          {/* <Route path="/trabalhe-conosco" Component={TrabalheConosco} /> */}
          <Route path="/checkout" Component={Checkout} />
          <Route path="/faca-parte" Component={FacaParte} />
        </Routes>
      </main>
      {path != '/login' &&
        path != '/cadastro-profissional' &&
        path != '/login-cliente' &&
        path != '/cadastro-cliente' && <Footer />}
    </BrowserRouter>
  );
}

export default App;
