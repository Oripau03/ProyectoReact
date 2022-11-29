import './style/style.css'
import CardProperty from './components/Card';
import CardsContainer from './components/CardsContainer';
import properties from './properties.json'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <div className='section1'>
        {<CardsContainer>
          {properties.map(property =>
            <CardProperty
              id={property.id}
              Tipo={property.Tipo}
              Operacion={property.Operacion}
              Barrio={property.Barrio}
              Ciudad={property.Ciudad}
              Habitaciones={property.Habitaciones}
              Baños={property.Baños}
              Metros={property.Metros}
              Precio={property.Precio}
              Imagen={property.Imagen}
            />)}
        </CardsContainer>}
      </div>
      <section className="cta-home w-100 d-flex justify-content-center p-4 p-md-5">
        <div className="cta d-flex flex-column align-items-center p-4 p-md-5 text-center">
          <h2>
            Si te interesa tener más información sobre estas propiedades contáctanos ahora.</h2>
          <Link className="btn button-color" to="/contacto">Contáctanos</Link>
        </div>
      </section>
    </>
  );
}

export default Home;