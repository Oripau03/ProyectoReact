import team1 from '../img/team1.jpg';
import team2 from '../img/team2.jpg';
import team3 from '../img/team3.jpg';

function TeamSection2() {
    return (
        <>
            <section className="team-section2 d-flex flex-column align-items-center p-4 p-md-5">
                <h1>Nuestro Equipo</h1>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-0 py-md-3">
                    <div className="team-card d-flex flex-column align-items-center text-center">
                        <img src={team1} alt='Team Member'/>
                        <div className="name-team p-3">
                            <h3>
                                Lorem Ipsum
                                <br />
                                Asesor Inmobiliario
                            </h3>
                        </div>
                    </div>
                    <div className="team-card d-flex flex-column align-items-center text-center">
                        <img src={team2} alt='Team Member'/>
                        <div className="name-team p-3">
                            <h3>
                                Lorem Ipsum
                                <br />
                                Asesor Inmobiliario
                            </h3>
                        </div>
                    </div>
                    <div className="team-card d-flex flex-column align-items-center text-center">
                        <img src={team3} alt='Team Member'/>
                        <div className="name-team p-3">
                            <h3>
                                Lorem Ipsum
                                <br />
                                Decoradora
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamSection2;