import './style/style.css'
import diseno from './img/diseno.jpg';
import diseno1 from './img/diseno1.jpg';
import diseno2 from './img/diseno2.jpg';
import diseno3 from './img/diseno3.jpg';
import diseno4 from './img/diseno4.jpg';
import ImgRow from './components/ImgRow';

function Diseno() {
    return (
        <div>
            <section className="int-section1 w-100 d-flex flex-column flex-md-row">
                <div className="int-section1-left d-flex flex-column col-md-7 p-4 p-md-5">
                    <h1>
                        Diseño de Interiores
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="int-section1-right d-flex col-md-5 p-4 p-md-5 align-items-center">
                <img src={diseno} />
                </div>

            </section>
            <section className="gallery m-2 p-md-5 d-flex row">
                <div>
                    <ImgRow/>
                </div>
            </section>

        </div>

    )
}

export default Diseno;