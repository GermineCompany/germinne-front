import React from 'react';
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

function App() {
  const path = window.location.pathname;
  return (
    <BrowserRouter>
      {
        path != '/login' && path != '/cadastro-profissional'
        && path != '/login-cliente' && <Header />
      }
      <main>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/sobre-nos' Component={SobreNos} />
          <Route path='/blog' Component={Blog} />
          <Route path='/login' Component={Login} />
          <Route path='/cadastro-profissional' Component={CadastroProfissional} />
          <Route path='/login-cliente' Component={LoginCliente} />
        </Routes>
      </main>
      {
        path != '/login' && path != '/cadastro-profissional'
        && path != '/login-cliente' && <Footer />
      }
    </BrowserRouter>
  );
}

export default App;
