import React from 'react'

// Import Custom modules
// import RegisterForm from './RegisterForm.jsx'

// Importing Custom CSS
import '../css/LoginForm.css'


import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

// Importing Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
    return(
        <>  {/* Main Container */}
            <div className="form-container">
                <FloatingLabel
                    controlId='floatingInput'
                    label='Correo Electronico'
                    className='mb-3'
                >
                    <Form.Control type='email' placeholder='Ejemplo@correo.com'/>
                </FloatingLabel>

                <FloatingLabel controlId='floatingPassword' label='Password'>
                    <Form.Control type='password' placeholder='Contraseña'/>
                </FloatingLabel>

                <span className='RedirectToRegister'>¿No tienes cuenta? <a href='#'>Registrate aquí!</a></span>
                <button className='btn login-btn'>Iniciar Sesión</button>
            </div>
        </>
    );

}

export default LoginForm;