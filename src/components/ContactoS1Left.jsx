import map from '../img/map.jpg'

function ContactoLeft() {

    return (
        <>
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
                    <img src={map} alt="Mapa de la ubicación" />
                </div>
            </div>
        </>
    )
}

export default ContactoLeft;
