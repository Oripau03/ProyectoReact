import React from 'react';

import logo from '../img/logo.png';
import '../style/header-footer.css';
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
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
                      <svg>...</svg>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
                      <svg>...</svg>
                    </a>
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
