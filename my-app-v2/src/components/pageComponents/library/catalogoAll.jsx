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

function CatalogoAll({ addToCart }) {

    // JSON de ejemplo
    const books = [
        {
            title: 'Don Quijote de la Mancha',
            author: 'Miguel de Cervantes',
            type: 'E-Book',
            year: '1605',
            cover: CoverBook
        },
        {
            title: 'El Principito',
            author: 'J.K.Rowling',
            type: 'Book',
            year: '2003',
            cover: CoverBook
        },
        {
            title: 'Don Quijote de la Mancha',
            author: 'Miguel de Cervantes',
            type: 'E-Book',
            year: '1605',
            cover: CoverBook
        },
        {
            title: 'El Principito',
            author: 'J.K.Rowling',
            type: 'Book',
            year: '2003',
            cover: CoverBook
        },
        {
            title: 'Don Quijote de la Mancha',
            author: 'Miguel de Cervantes',
            type: 'E-Book',
            year: '1605',
            cover: CoverBook
        },
        {
            title: 'El Principito',
            author: 'J.K.Rowling',
            type: 'Book',
            year: '2003',
            cover: CoverBook
        },
        {
            title: 'Don Quijote de la Mancha',
            author: 'Miguel de Cervantes',
            type: 'E-Book',
            year: '1605',
            cover: CoverBook
        },
        {
            title: 'El Principito',
            author: 'J.K.Rowling',
            type: 'Book',
            year: '2003',
            cover: CoverBook
        }
    ];

    return (
        <div className="container my-5">
            <div className="row justify-content-center cards-row">
                {books.map((book, idx) => (
                    <div key={idx} className="col-5th d-flex justify-content-center mb-4">
                        <Card className="card p-2" style={{ width: '14rem' }}>
                            <Card.Img variant="top" src={book.cover} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '14px' }}>{book.title}</Card.Title>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item style={{ fontSize: '14px' }}>
                                        <strong>Autor /(es):</strong> {book.author}
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{ fontSize: '14px' }}>
                                        <strong>Título:</strong> {book.title}
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{ fontSize: '14px' }}>
                                        <strong>Año:</strong> {book.year}
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{ fontSize: '14px' }}>
                                        <strong>Tipo:</strong> {book.type}
                                    </ListGroup.Item>
                                </ListGroup>
                                <div className="optionBtn d-flex justify-content-center gap-2 mt-2">
                                    <Button className="btn btn-secondary">
                                        Detalles
                                    </Button>
                                    <Button 
                                        className="btn btn-success"
                                        onClick={() => addToCart(book)}
                                    >
                                        Reservar
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default CatalogoAll;
