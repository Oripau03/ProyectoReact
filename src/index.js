import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.js';
import Header from './Header';
import Home from './Home';
import Team from './Team';
import Test from './components/ImgRow';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
);
