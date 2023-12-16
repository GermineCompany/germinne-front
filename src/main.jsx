import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GerminneProvider from './context/GerminneProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GerminneProvider>
      <App />
    </GerminneProvider>
  </React.StrictMode>,
);
