import '../style/style.css'

const CardProperty = (props) => {
    
    return (
        <>
            <div className="property-card col-12 col-lg-3 p-3 mb-2" key={props.id}>
                <img src={props.Imagen} alt="Image Card"/>
                    <p className="uppercase">{props.Tipo} en {props.Operacion}</p>
                    <p>{props.Barrio}, {props.Ciudad}</p>
                    <div className="info-card d-flex flex-row justify-content-between">
                        <div>
                            <p>{props.Habitaciones} Habs</p>
                        </div>
                        <div>|</div>
                        <div>
                            <p>{props.Baños} Baños</p>
                        </div>
                        <div>|</div>
                        <div>
                            <p>{props.Metros} m<sup>2</sup></p>
                        </div>
                    </div>
                    <h3>{props.Precio}</h3>
            </div>
            </>
    );
}

export default CardProperty