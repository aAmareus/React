import React from "react";

import '../../assets/css/filtermenu.css';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

// Importing FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

function FilterMenu() {
    return (
        <>
            <Nav className="justify-content-center position-sticky">
                <Nav.Item>
                        {/* Input to search by name */}
                <div className="search-input-wrapper">
                    <FontAwesomeIcon icon="magnifying-glass" className="search-icon" />
                    <input type="text" className="searchByName" placeholder="Buscar por nombre" />
                </div>
                </Nav.Item>

                {/* Dropdown options for year type */}
                <NavDropdown title="Año" id="nav-dropdown-year" className="nav-dropdown">
                    <NavDropdown.Item>2025</NavDropdown.Item>
                    <NavDropdown.Item>2024</NavDropdown.Item>
                    <NavDropdown.Item>2023</NavDropdown.Item>
                    <NavDropdown.Item>2022</NavDropdown.Item>
                    <NavDropdown.Item>2021</NavDropdown.Item>
                    <NavDropdown.Item>2020</NavDropdown.Item>
                </NavDropdown>

                {/* Dropdown options for bookstyle type */}
                <NavDropdown title="Tipo" id="nav-dropdown-bookstyle" className="nav-dropdown">
                    <NavDropdown.Item>E-Book</NavDropdown.Item>
                    <NavDropdown.Item>Libro Físico</NavDropdown.Item>
                    <NavDropdown.Item>DVD</NavDropdown.Item>
                    <NavDropdown.Item>BlueRay</NavDropdown.Item>
                </NavDropdown>

                {/* button to clear filters */}
                <Nav.Item>
                    <Button className="btn btn-outline-secondary">Limpiar</Button>
                </Nav.Item>
            </Nav>
        </>
    );
}

export default FilterMenu;