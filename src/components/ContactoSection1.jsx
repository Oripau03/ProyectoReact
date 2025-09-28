import ContactoLeft from "./ContactoS1Left";
import ContactForm from "./FormContacto";

import { useState } from 'react';

function ContactoSection1() {

    const [contacto] = useState({}); // setContacto eliminado para que compile

    return (
        <>
            <section className="contact-section d-flex flex-column flex-md-row">
                <ContactoLeft />
                <ContactForm setContacto={contacto} />
            </section>
        </>
    )
}

export default ContactoSection1;
