import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Cart({cartItems, removeFromCart}) {
    return(
        <div className='cart-container p-3 cart-small cart-sticky'>
            <h6>Carrito de Reservas</h6>
            {cartItems.length === 0 ? (
                <div className='text-center text-muted'>No exsiten selecciones todavía.</div>
            ) : (
                cartItems.map((item, idx) => (
                    <Card key={idx} className='mb-2'>
                        <Card.Body className='d-flex justify-content-center align-items-center'>
                            <div>
                                <strong className='cart-title'>{item.title}</strong>
                                <div style={{fontSize: '0.9em'}}>{item.author}</div>
                            </div>
                            <Button
                                variant='danger'
                                size='sm'
                                onClick={() => removeFromCart(idx)}
                            >
                                Quitar
                            </Button>
                        </Card.Body>
                    </Card>
                ))
            ) }
        </div>
    );
}

export default Cart;

