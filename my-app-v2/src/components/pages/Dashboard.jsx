import React, { useState } from 'react';

import '../assets/css/catalogo.css';

import Navbar from '../pageComponents/navigation/navbar.jsx';
import FilterMenu from '../pageComponents/navigation/filtermenu.jsx';
import CatalogoAll from '../pageComponents/library/catalogoAll.jsx';
import Cart from '../pageComponents/library/cart.jsx';
import Footer from '../pageComponents/navigation/footer.jsx';



function Dashboard() {
    const [cartItems, setCartItems] = useState([])

    // Agregar al carrito
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    }

    // Quitar del carrito
    const removeFromCart = (idx) => {
        setCartItems(cartItems.filter((_, i) => i !== idx));
    }

    return (
        <div className="catalogo-body">
            <Navbar />
            <FilterMenu />
            <div className="dashboard-flex">
                <div className="catalogo-list">
                    <CatalogoAll addToCart={addToCart}/>
                </div>
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;