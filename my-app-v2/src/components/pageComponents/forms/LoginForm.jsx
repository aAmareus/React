import React from 'react'
import { Link } from 'react-router-dom';

// Importing Custom CSS
import '../../assets/css/LoginForm.css'

import RegisterForm from './RegisterForm.jsx'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import LogoText from '../../assets/img/logoBN.png'


function LoginForm() {
    return (
        <>  {/* Main Container */}
            <div className="form-container d-flex align-items-center justify-content-evenly p-2">
                <div className="img-holder">
                    <img src={LogoText} 
                        alt="" 
                    />
                </div>
                <div className="form-content">
                    <FloatingLabel
                        controlId='floatingInput'
                        label='Correo Electronico'
                        className='mb-3'
                    >
                        <Form.Control type='email' placeholder='Ejemplo@correo.com' className='input' />
                    </FloatingLabel>

                    <FloatingLabel controlId='floatingPassword' label='Password'>
                        <Form.Control type='password' placeholder='Contraseña' className='input' />
                    </FloatingLabel>

                    <div className="link-iitems d-flex flex-column align-items-center justify-content-center mt-3">
                        <button className='login-btn'>Iniciar Sesión</button>
                        <span className='RedirectToRegister'>
                            ¿No tienes cuenta?
                            <Link to='/register' className='RegisterLink'> Regístrate Aquí</Link>
                        </span>
                    </div>

                </div>
            </div>
        </>
    );

}

export default LoginForm;