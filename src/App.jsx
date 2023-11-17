import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import SobreNos from './pages/SobreNos/SobreNos';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/sobre-nos' Component={SobreNos} />
          <Route path='/blog' Component={Blog} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
