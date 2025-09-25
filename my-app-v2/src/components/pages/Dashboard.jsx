import React from 'react';

import '../assets/css/catalogo.css';

import Navbar from '../pageComponents/navigation/navbar.jsx';
import FilterMenu from '../pageComponents/navigation/filtermenu.jsx';
import CatalogoAll from '../pageComponents/navigation/catalogoAll.jsx';
import Footer from '../pageComponents/navigation/footer.jsx';


function Dashboard() {
    return (
        <div className="catalogo-body">
            <Navbar />
            <FilterMenu />
            <CatalogoAll/>
            <Footer />
        </div>
    );
}

export default Dashboard;