import React from "react";

import NavBar from "../pageComponents/navigation/navbar";
import RegisterForm from '../pageComponents/forms/registerForm.jsx';
import Footer from "../pageComponents/navigation/footer";


// Import CSS
import '../assets/css/register.css';


function Register() {
    return(
        <div className="register-container">
            <NavBar/>
            <RegisterForm />
            <div className="mt-10">
                {/* Just a divider to place Footer in bottom */}
            </div>
            <Footer/>
        </div>
    );
}

export default Register;