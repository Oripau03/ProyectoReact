import './style/style.css'
import team1 from './img/team1.jpg';
import team2 from './img/team2.jpg';
import team3 from './img/team3.jpg';
import { Link } from 'react-router-dom';



function Team() {
    return (
    <div>
            <section className="team-section1 d-flex flex-column flex-md-row align-items-end">
                <div className="team-section1-left col-md-6 pe-md-3 p-4 p-md-5">
                    <h1>
                        ¿Quiénes Somos?
                    </h1>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
                <div className="team-section1-right col-md-6 ps-md-3 p-4 p-md-5">
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
            </section>
            <section className="team-section2 d-flex flex-column align-items-center p-4 p-md-5">
                <h1>Nuestro Equipo</h1>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-0 py-md-3">
                    <div className="team-card d-flex flex-column align-items-center text-center">
                        <img src={team1} />
                        <div className="name-team p-3">
                            <h3>
                                Lorem Ipsum
                                <br/>
                                    Asesor Inmobiliario
                                </h3>
                        </div>
                    </div>
                    <div className="team-card d-flex flex-column align-items-center text-center">
                        <img src={team2} />
                        <div className="name-team p-3">
                            <h3>
                                Lorem Ipsum
                                <br/>
                                    Asesor Inmobiliario
                                </h3>
                        </div>
                    </div>
                    <div className="team-card d-flex flex-column align-items-center text-center">
                        <img src={team3} />
                        <div className="name-team p-3">
                            <h3>
                                Lorem Ipsum
                                <br/>
                                    Decoradora
                                </h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta-home w-100 d-flex justify-content-center p-4 p-md-5">
                <div className="cta d-flex flex-column align-items-center p-4 p-md-5 text-center">
                    <h2>
                        Estamos aquí para ayudarles en cada paso del proceso.</h2>
                    <Link className="btn button-color" to="/contacto">Contáctanos</Link>
                </div>
            </section>
        </div>

    )
}

export default Team;