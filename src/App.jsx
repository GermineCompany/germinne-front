import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import SobreNos from './pages/SobreNos/SobreNos';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' Component={ Home }/>
          <Route path='/sobre-nos' Component={ SobreNos }/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
