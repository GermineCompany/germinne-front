import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' Component={ Home }/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
