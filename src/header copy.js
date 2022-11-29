import logo from './logo.svg';
import './header-footer.css';

function Header() {
  return (
    <div className="Header">
      <header className="Nav-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
    <header>
        <nav class="navbar navbar-expand-lg navbar-light p-0">
            <div class="container-fluid p-0">
                <a class="navbar-brand d-block d-lg-none" href="index.html"><img src="./Imagenes/logo.png"
                        alt="Logo"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-lg-flex justify-content-center px-lg-5" id="navbarNavAltMarkup">
                    <div class="navbar-nav menu-mobile text-center flex-fill">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        <a class="nav-link" href="team.html">¿Quiénes Somos?</a>
                        <a class="navbar-brand d-lg-block d-none" href="index.html"><img src="./Imagenes/logo.png"
                                alt="Logo"></a>
                        <a class="nav-link" href="interiores.html">Diseño de Interiores</a>
                        <a class="nav-link" href="contact.html">Contacto</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>