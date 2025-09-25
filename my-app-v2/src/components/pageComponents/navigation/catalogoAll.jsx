import React from "react";

// Impotyin Bootstrap components
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

// Import image es example 
import CoverBook from '../../assets/img/covers/DonQuijoteDeLaMancha.jpg';

// Importing FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

import '../../assets/css/catalogo.css';

function CatalogoAll() {
    return (
        <div className="cards-holder d-flex justify-content-center gap-5 mt-10">
            <Card className="card p-2" style={{ width: '14rem' }}>
                <Card.Img variant="top" src={CoverBook} />
                <Card.Body>
                    <Card.Title style={{ fontSize: '14px' }}>Don Quijote de la Mancha</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item style={{ fontSize: '14px' }}>
                            <strong>Autor:</strong> Miguel de Cervantes
                        </ListGroup.Item>
                        <ListGroup.Item style={{ fontSize: '14px' }}>
                            <strong>Tipo:</strong> E-Book
                        </ListGroup.Item>
                        <ListGroup.Item style={{ fontSize: '14px' }}>
                            <strong>Lanzamiento:</strong> 1605
                        </ListGroup.Item>
                    </ListGroup>

                    <div className="optionBtn d-flex justify-content-center gap-1">
                        <Button className="btn btn-secondary">
                            Detalles <FontAwesomeIcon icon={['fas', 'circle-info']} />
                        </Button>

                        <Button className='btn btn-success'>
                            Reservar <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CatalogoAll;
