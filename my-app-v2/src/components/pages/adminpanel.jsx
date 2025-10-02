import React from "react";

import '../assets/css/admin.css'

import Navbar from '../pageComponents/navigation/NavBar.jsx';
import Footer from '../pageComponents/navigation/footer.jsx';

// Importing FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

import Button from 'react-bootstrap/Button';

function Adminpanel() {
    const usuarios = [
        { id: 1, nombre: "Amaro", apellido: "González", email: "amaro@proton.me" },
        { id: 2, nombre: "Pedro", apellido: "López", email: "pedro@proton.me" },
        { id: 3, nombre: "Ana", apellido: "Martínez", email: "ana@proton.me" },
        { id: 1, nombre: "Amaro", apellido: "González", email: "amaro@proton.me" },
        { id: 2, nombre: "Pedro", apellido: "López", email: "pedro@proton.me" },
        { id: 3, nombre: "Ana", apellido: "Martínez", email: "ana@proton.me" },
        { id: 1, nombre: "Amaro", apellido: "González", email: "amaro@proton.me" },
        { id: 2, nombre: "Pedro", apellido: "López", email: "pedro@proton.me" },
        { id: 3, nombre: "Ana", apellido: "Martínez", email: "ana@proton.me" },
        { id: 1, nombre: "Amaro", apellido: "González", email: "amaro@proton.me" },
        { id: 2, nombre: "Pedro", apellido: "López", email: "pedro@proton.me" },
    ];

    return (
        <div className="adminPanel-info-container">
            <Navbar/>
            <h1 className="mt-10">Panel de Administración</h1>
            <table border="1" cellPadding="20" cellSpacing="1" style={{ width: "80%", marginTop: "20px", marginLeft: '10%'}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Modificar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((u) => (
                        <tr key={u.id} className="fila">
                            <td className="col-1">{u.id}</td>
                            <td className="col-3">{u.nombre}</td>
                            <td className="col-3">{u.apellido}</td>
                            <td className="col-4">{u.email}</td>
                            <td className="d-flex align-items-center justify-content-start gap-2 col-1">
                                <Button style={{marginTop: '6px'}} className="btn btn-primary">
                                    <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                                </Button>
                                <Button style={{marginTop: '6px'}} className="btn btn-danger">
                                    <FontAwesomeIcon icon="fa-solid fa-trash" />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="divisor mt-10"></div>
            <Footer/>
        </div>
    );
}

export default Adminpanel;