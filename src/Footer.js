import React from 'react';
import ReactDOM from 'react-dom/client';

import Team from './Team';
import Home from './Home';

import logo from './img/logo.png';
import './style/header-footer.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="Footer">
            <section className="footer d-flex row m-3 m-lg-5 justify-content-between">
                <div className="col-md-auto py-2 order-md-1">
                    <img src={logo} alt=""/>
                </div>
                <div className="col-7 col-md-auto py-2 order-md-2">
                    <h1>
                        MENÚ
                    </h1>
                    <Link className="nav-link" to="/home" preventScrollReset={true} >Home</Link >
                    <Link className="nav-link" to="/team" preventScrollReset={true}>¿Quiénes Somos?</Link >
                    <Link className="nav-link" to="/diseno" preventScrollReset={true}>Diseño de Interiores</Link >
                    <Link className="nav-link" to="/contacto" preventScrollReset={true}>Contacto</Link >
                </div>
                <div className="col-5 col-md-auto col-lg-2 py-2 order-md-4">
                    <h1>
                        SÍGUENOS
                    </h1>
                    <a target="_blank" href="https://www.instagram.com"><svg
                        xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                        <g id="Grupo_72" data-name="Grupo 72" opacity="0.5">
                            <rect id="Rectángulo_84" data-name="Rectángulo 84" width="30" height="30" rx="6"
                                fill="#fff" />
                            <g id="Grupo_223" data-name="Grupo 223" transform="translate(3 2.999)">
                                <path id="Trazado_62" data-name="Trazado 62"
                                    d="M13.079,5.7c2.4,0,2.688.009,3.637.052a4.982,4.982,0,0,1,1.671.31A2.981,2.981,0,0,1,20.1,7.771a4.981,4.981,0,0,1,.31,1.671c.043.949.052,1.234.052,3.637s-.009,2.688-.052,3.637a4.982,4.982,0,0,1-.31,1.671A2.981,2.981,0,0,1,18.387,20.1a4.982,4.982,0,0,1-1.671.31c-.949.043-1.233.052-3.637.052s-2.688-.009-3.637-.052a4.981,4.981,0,0,1-1.671-.31,2.981,2.981,0,0,1-1.708-1.708,4.981,4.981,0,0,1-.31-1.671c-.043-.949-.052-1.234-.052-3.637s.009-2.688.052-3.637a4.981,4.981,0,0,1,.31-1.671A2.981,2.981,0,0,1,7.771,6.063a4.981,4.981,0,0,1,1.671-.31c.949-.043,1.234-.052,3.637-.052m0-1.622c-2.444,0-2.751.01-3.711.054a6.606,6.606,0,0,0-2.185.418A4.6,4.6,0,0,0,4.552,7.184a6.606,6.606,0,0,0-.418,2.185c-.044.96-.054,1.266-.054,3.711s.01,2.751.054,3.711a6.606,6.606,0,0,0,.418,2.185,4.6,4.6,0,0,0,2.632,2.632,6.606,6.606,0,0,0,2.185.418c.96.044,1.266.054,3.711.054s2.751-.01,3.711-.054a6.606,6.606,0,0,0,2.185-.418,4.6,4.6,0,0,0,2.632-2.632,6.606,6.606,0,0,0,.418-2.185c.044-.96.054-1.266.054-3.711s-.01-2.751-.054-3.711a6.606,6.606,0,0,0-.418-2.185,4.6,4.6,0,0,0-2.632-2.632,6.606,6.606,0,0,0-2.185-.418c-.96-.044-1.266-.054-3.711-.054Z"
                                    transform="translate(-4.079 -4.079)" fill="#424242" stroke="rgba(0,0,0,0)"
                                    strokeWidth="1" />
                                <path id="Trazado_63" data-name="Trazado 63"
                                    d="M131.111,126.635a4.476,4.476,0,1,0,4.476,4.476A4.476,4.476,0,0,0,131.111,126.635Zm0,7.381a2.905,2.905,0,1,1,2.905-2.905A2.905,2.905,0,0,1,131.111,134.016Z"
                                    transform="translate(-122.111 -122.111)" fill="#424242" stroke="rgba(0,0,0,0)"
                                    strokeWidth="1" />
                                <circle id="Elipse_60" data-name="Elipse 60" cx="1.116" cy="1.116" r="1.116"
                                    transform="translate(12.667 3.102)" fill="#424242" stroke="rgba(0,0,0,0)"
                                    strokeWidth="1" />
                            </g>
                        </g>
                    </svg></a >
                    <a target="_blank" href="https://www.facebook.com"><svg id="Grupo_156"
                        data-name="Grupo 156" xmlns="http://www.w3.org/2000/svg" width="30" height="30.298"
                        viewBox="0 0 26 26.298">
                        <circle id="Elipse_62" data-name="Elipse 62" cx="13" cy="13" r="13" fill="#fff" opacity="0.5" />
                        <path id="Intersección_1" data-name="Intersección 1"
                            d="M3.942,22.141V12.527H0V8.582H3.942s-.067-.815,0-4.377A4.124,4.124,0,0,1,8.447,0c1.465.046,3.77.3,3.77.3l.172,3.418s-.3.011-2.1,0-1.982,2-1.982,2V8.582h4.085l-.749,3.945H8.3v9.595a14.31,14.31,0,0,1-4.362.019Z"
                            transform="translate(7.159 4)" fill="#424242" />
                    </svg></a >
                </div>
                <div className="py-2 col-md-auto order-md-3">
                    <h1>
                        CONTÁCTANOS
                    </h1>
                    <p>(+506) 1234-1234</p>
                    <p>exclusivepropertiescostarica@gmail.com</p>
                </div>
            </section>
            </div>
  );
}

export default Footer;
