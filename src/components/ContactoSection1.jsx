import ContactoLeft from "./ContactoS1Left";
import ContactForm from "./FormContacto";

import { useState } from 'react';

function ContactoSection1() {

    const [contacto, setContacto] = useState({});

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
