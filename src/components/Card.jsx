import '../style/style.css'

const CardProperty = (props) => {

    return (
        <>
                <div className="property-card col-12 col-lg-3 p-3 mb-2" key={props.id}>
                    <img src={props.imagen} alt="Property" />
                    <p className="uppercase">{props.tipo} en {props.operacion}</p>
                    <p>{props.barrio}, {props.ciudad}</p>
                    <div className="info-card d-flex flex-row justify-content-between">
                        <div>
                            <p>{props.habitaciones} Habs</p>
                        </div>
                        <div>|</div>
                        <div>
                            <p>{props.baños} Baños</p>
                        </div>
                        <div>|</div>
                        <div>
                            <p>{props.metros} m<sup>2</sup></p>
                        </div>
                    </div>
                    <h3>{props.precio}</h3>
                </div>
        </>
    );
}

export default CardProperty