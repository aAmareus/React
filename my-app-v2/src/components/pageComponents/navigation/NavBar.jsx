import React from "react";

// Import components of Bootstrap
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { Link } from "react-router-dom";


import '../../assets/css/Navbar.css'

// Import img's
import Logo from '../../assets/img/logo-B.png'

function NavBar() {
  return (
    <Navbar bg='light' data-bs-theme='light' className='navbar-container sticky-top'>
      <Navbar.Brand as={Link} to="/" className='brand d-flex align-middle'>
        <img src={Logo}
          width={40}
          height={40}
          className='me-2'
        />
        {''}
        <p>Biblioteca Municipal</p>
      </Navbar.Brand>
      <Nav className='justify-content-end ms-auto nav-list' activeKey={'/home'}>
        <Nav.Link className='item-link' as={Link} to="/">Inicio</Nav.Link>
        <Nav.Link className='item-link' as={Link} to="/dashboard">Catálogo</Nav.Link>
        <Nav.Link className='item-link' as={Link} to="/cuenta">Cuenta</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;