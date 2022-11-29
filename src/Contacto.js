import { Button } from 'react-bootstrap';
import { Form } from 'react-router-dom';
import { useState } from 'react';

import map from './img/map.jpg'

import ContactForm from './components/FormContacto'
import ContactAlert from './components/ContactAlert'



function Contacto() {

    const [contacto, setContacto] = useState({});

    return (
        <><section className="contact-section d-flex flex-column flex-md-row">
            <div className="contact-section-left col-md-5 p-4 p-md-5">
                <div className="contact-info">
                    <div>
                        <h1 className="text-center">
                            Contacto
                        </h1>
                    </div>
                    <div>
                        <h4>
                            Dirección Comercial:
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <h4>
                            Número Telefónico:
                        </h4>
                        <p>
                            1234-1234
                        </p>
                    </div>
                    <div>
                        <h4>
                            Número de Fax:
                        </h4>
                        <p>
                            (+506) 1234-1234
                        </p>
                    </div>
                </div>
                <div className="contact-map">
                    <img src={map} />
                </div>
            </div>
                <ContactForm setContacto={contacto} />
            </section>
            <section>
                <div className="team-contact-section d-flex flex-column align-items-center py-5">
                    <h1>Nuestro Equipo</h1>
                    <div
                        className="contact-team d-flex flex-column flex-md-row align-items-center text-center justify-content-center flex-wrap">
                        <div className="name-contact-team p-3 m-3 m-md-2 col-md-4">
                            <h4 className="text-center">
                                Lorem ipsum
                                <br />
                                Asesor Inmobiliario
                                <br />
                                <a href="tel:+506-6350-4913">+506-1234-1234</a>
                            </h4>
                        </div>
                        <div className="name-contact-team p-3 m-3 m-md-2 col-md-4">
                            <h4 className="text-center">
                                Lorem ipsum
                                <br />
                                Asesor Inmobiliario
                                <br />
                                <a href="tel:+506-6399-4432">+506-1234-1234</a>
                            </h4>
                        </div>
                        <div className="name-contact-team p-3 m-3 m-md-2 col-md-4">
                            <h4 className="text-center">
                                Lorem ipsum
                                <br />
                                Decoradora
                                <br />
                                <a href="tel:+506-6321-5784">+506-1234-1234</a>
                            </h4>
                        </div>
                    </div>
                </div>
            </section></>
    );
}

export default Contacto;