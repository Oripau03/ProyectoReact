import diseno from '../img/diseno.jpg';

function DisenoSection1() {
    return (
        <>
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
                <img src={diseno} alt='Imagen diseño'/>
                </div>
            </section>
        </>
            )
}

export default DisenoSection1;