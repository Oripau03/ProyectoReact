import { Link } from 'react-router-dom';

function HomeCta() {
    return (
      <>
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
  
  export default HomeCta;