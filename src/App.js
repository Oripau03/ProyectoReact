import './App.css';
import './index.css';

import React from 'react';
import { Route, Routes, Router, Form } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Team from './Team';
import Home from './Home';
import Diseno from './Diseno';
import Contacto from './Contacto';
import Footer from './Footer';

import ImgRow from './components/ImgRow';
import CardProperty from './components/Card';
import CardsContainer from './components/CardsContainer';
import Error from './components/Error';
import ContactAlert from './components/ContactAlert';
import ContactForm from './components/FormContacto';


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/diseno' element={<Diseno />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
