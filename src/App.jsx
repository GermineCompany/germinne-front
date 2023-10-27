import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' Component={ Home }/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
