import properties from '../properties.json'
import CardProperty from '../components/Card';
import CardsContainer from '../components/CardsContainer';

function HomeSection1() {
    return (
        <>
            <section>
                <div className='section1'>
                    {<CardsContainer>
                        {properties.map(property =>
                            <CardProperty
                                key={property.id}
                                tipo={property.tipo}
                                operacion={property.operacion}
                                barrio={property.barrio}
                                ciudad={property.ciudad}
                                habitaciones={property.habitaciones}
                                baños={property.baños}
                                metros={property.metros}
                                precio={property.precio}
                                imagen={property.imagen}
                            />)}
                    </CardsContainer>}
                </div>
            </section>
        </>
    );
}

export default HomeSection1;