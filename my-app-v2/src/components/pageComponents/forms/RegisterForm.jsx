import React from "react";
import { Link } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import LogoText from '../../assets/img/logoBN.png';


import '../../assets/css/register.css';

function RegisterForm() {
    return (
        <div className="register-form-container d-flex justify-content-center gap-5 mt-10">
            <div className="image-holder d-flex justify-content-center col-2">
                <img 
                src={LogoText} 
                alt="" />
            </div>
            <div className="form-holder row g-2 col-4">

                {/* name Input */}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Nombre"
                    className="col-6"
                >

                    <Form.Control
                        type="text"
                        placeholder="Nombre"
                        className="userInput input"
                    />
                </FloatingLabel>

                {/* last name Input */}
                <FloatingLabel
                controlId="floatingInput"
                label="Apellido"
                className="col-6">
                    <Form.Control
                        type="text"
                        placeholder="Apellido"
                        className="lastNameInput input"
                    />
                </FloatingLabel>

                {/* email Input */}
                <FloatingLabel
                controlId="floatingInput"
                label="Correo Electrónico"
                className="col-12">
                    <Form.Control
                        type="email"
                        placeholder="Correo Electrónico"
                        className="emailInput input"
                    />
                </FloatingLabel>
                {/* password Input */}
                <FloatingLabel
                controlId="floatingInput"
                label="Contraseña"
                className="col-6">
                    <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        className="passwordInput input"
                    />
                </FloatingLabel>

                {/* confirm password Input */}
                <FloatingLabel
                controlId="floatingInput"
                label="Confirmar Contraseña"
                className="col-6">
                    <Form.Control
                        type="password"
                        placeholder="Confirmar Contraseña"
                        className="confirmPasswordInput input"
                    />
                </FloatingLabel>
                <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                    <button className="btn-register-user">Registrarse</button>
                    <span className="RedirectToRegister">¿Ya tienes cuenta?<Link to={"/"} className="RegisterLink"> Volver al inicio</Link></span>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;