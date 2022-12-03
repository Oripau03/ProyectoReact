import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useState } from "react";
import ContactAlert from './ContactAlert'

import '../style/style.css'


function ContactForm() {
    // DATOS
    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    })
    const [guardarDatos, setGuardarDatos] = useState('');
    
    /* const [error, setError] = useState(false); */
    
    // LEER DATOS DEL INPUT
    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]:e.target.value
        })
    };

    const {nombre, email, telefono, mensaje} = datos


    // al momento de enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const {nombre, email, telefono, mensaje} = datos

        if(nombre.trim() === '' || email.trim() === ''||telefono.trim() === '' || mensaje.trim() ==='' ){
            return;

        }
        setGuardarDatos({
            ...datos,
        })
    
        const alertMensaje = document.getElementById('alerta-mensaje');
        alertMensaje.classList.remove('d-none');
    }

    
return (
    <div className="contact-section-right col-md-7 p-4 p-md-5">
        <ContactAlert guardarDatos={guardarDatos} />
        <Form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 p-4 mx-5 mb-10"
        >
            
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>
                    Nombre y Apellido
                </Form.Label>
                <Form.Control 
                    type="text"
                    name="nombre"
                    placeholder="Ingrese su nombre y apellido" 
                    value={nombre}
                    onChange={handleChange}

                />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>
                    Email
                </Form.Label>
                <Form.Control 
                    type="email"
                    name="email"
                    placeholder="Ingrese su Email"
                    value={email}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>
                    Teléfono de contacto
                </Form.Label>
                <Form.Control 
                    type="number"
                    name="telefono"
                    placeholder="12345678"
                    value={telefono}
                    onChange={handleChange}

                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>
                    Mensaje
                </Form.Label>
                <Form.Control 
                    type="text"
                    name="mensaje"
                    placeholder="Ingrese su mensaje o servicio por el cual nos contacta"
                    value={mensaje}
                    onChange={handleChange}

                />
            </Form.Group>

            <Button
                className="button-color" 
                type="submit"
                >
                Enviar Mensaje
            </Button>
        </Form>

    </div>

    );
    }

export default ContactForm;