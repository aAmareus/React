import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import custom components
import LoginForm from './assets/forms/LoginForm.jsx'

// Import components of Bootstrap
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



// Import img's
import Logo from './assets/img/logo-B.png'
function App() {

  return (
    // Start of the page
    <>
      {/* Navbar */}
      <Navbar bg='light' data-bs-theme='light' className='navbar-container sticky-top'>
        <Navbar.Brand href='#' className='brand d-flex align-middle'>
          <img src={Logo}
            width={40}
            height={40}
            className='me-2'
          />
          {''}
          <p>Biblioteca Municipal</p>
        </Navbar.Brand>
        <Nav className='justify-content-end ms-auto nav-list' activeKey={'/home'}>
          <Nav.Link className='item-link' href='/home'>Inicio</Nav.Link>
          <Nav.Link className='item-link' href='#'>Catálogo</Nav.Link>
          <Nav.Link className='item-link' href='#'>Cuenta</Nav.Link>
        </Nav>
      </Navbar>

      {/* Login Form */}
      <LoginForm/>
    </>
  )
}

export default App
