import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

// Importing Custom CSS
import '../../assets/css/LoginForm.css'

// Importing Bootstrap components
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

// Importing FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

// Importing Images
import LogoText from '../../assets/img/logoBN.png';


function LoginForm() {

    // Function to validate form
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // To show n' hide password
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (email.endsWith('@gmail.com')) {
            navigate('/dashboard');
        } else if (email.endsWith('@bec.cl')) {
            navigate('/admin-panel');
        } else {
            alert('Credenciales inválidas. Intente nuevamente.');
        }
    }

    return (
        <>  {/* Main Container */}
            <div className="form-container d-flex align-items-center justify-content-evenly p-5 gap-5 mt-10">
                <div className="img-holder">
                    <img src={LogoText}
                        alt="Logo de la biblioteca en Blanco y Negro con el Nombre de esta."
                    />
                </div>
                <div className="form-content">
                    <h4>¡Bienvenid@! ingresa tus credenciales para ingresar a la biblioteca</h4>
                    <FloatingLabel
                        controlId='floatingInput'
                        label='Correo Electronico'
                        className='mb-3'
                    >
                        <Form.Control
                            type='email'
                            placeholder='Ejemplo@correo.com'
                            className='input'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId='floatingPassword'
                        label='Password'
                        className='mb-3'
                    >
                        <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Contraseña'
                            className='input'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {/* Trigger to see n' hide password */}

                        <div className="trigger">
                            <input type="checkbox"
                                className='toggle-check'
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)} // Cambia al hacer click
                            />
                            <FontAwesomeIcon icon={showPassword ? 'fa-eye' : 'fa-eye-slash'}
                                className='toggle-icon' />
                        </div>
                    </FloatingLabel>

                    <div className="link-iitems d-flex flex-column align-items-center justify-content-center mt-3">
                        <button className='login-btn' onClick={handleSubmit}>Iniciar Sesión</button>
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