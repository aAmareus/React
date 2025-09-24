import React from "react";

import '../../assets/css/footer.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import UniLogo from '../../assets/img/uniLogo.png'
import BecLogo from '../../assets/img/logoBN.png'

function Footer() {
    return(
        <>
            <Row className="footer-container">
                <Col className="d-flex justify-content-evenly align-items-center col-4">
                    <img 
                    src={UniLogo} 
                    height={'60px'}
                    alt="Logo de la universidad." 
                    />

                    <img 
                    src={BecLogo} 
                    alt="Logo de la biblioteca." 
                    />
                </Col>
                <Col className="d-flex justify-content-center align-items-center col-8">
                <h6>Blibioteca Municipal de Estación Central | &#169; Todos los Derechos reservados - 2025</h6>
                </Col>
            </Row>
        </>
    );
}

export default Footer;