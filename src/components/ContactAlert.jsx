import { Alert } from 'react-bootstrap'

const ContactAlert = ({guardarDatos}) => {
  const {nombre,email,telefono,mensaje}=guardarDatos

  return (
    <div className="d-none" id="alerta-mensaje">
      {[
        'secondary'
      ].map((contacto) => (
        <Alert key={contacto} variant={contacto} >
          Hola {nombre}! Acabas de enviar el siguiente mensaje: {mensaje}.<br/>
          Te contactaremos proximamente a través del teléfono {telefono} y el email {email}.
        </Alert>
      ))}
    </div>
  );
}

export default ContactAlert