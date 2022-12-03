import './App.css';
import './index.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Team from './pages/Team';
import Home from './pages/Home';
import Diseno from './pages/Diseno';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/diseno' element={<Diseno />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
