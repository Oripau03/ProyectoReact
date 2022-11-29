import { Row } from "react-bootstrap";

function CardsContainer(props) {

    return (
        <section className="card-container">
            <h1>Nuestras Propiedades Destacadas</h1>
            <div>
                <Row className="row">
                {props.children}
                </Row>
            </div>
        </section>
    );
}


export default CardsContainer