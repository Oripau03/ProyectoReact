import React from 'react';

import logo from '../img/logo.png';
import '../style/header-footer.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <header className="Nav-header">
        <Navbar expand="lg">
          <Container>
            <Link className="navbar-brand d-block" to="/home"><img src={logo}
              alt="Logo" /></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <div className="navbar-nav menu-mobile text-center flex-fill">
                  <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                  <Link className="nav-link" to="/team">¿Quiénes Somos?</Link>
                  <Link className="nav-link" to="/diseno">Diseño de Interiores</Link>
                  <Link className="nav-link" to="/contacto">Contacto</Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;