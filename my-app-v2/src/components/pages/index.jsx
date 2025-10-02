import React from 'react';

// Import custom components
import NavBar from '../pageComponents/navigation/navbar.jsx'
import LoginForm from '../pageComponents/forms/loginForm.jsx'
import Preview from '../pageComponents/library/Preview.jsx'
import Footer from '../pageComponents/navigation/footer.jsx'

function Index() {
    return(
        <>
            <NavBar/>
            <LoginForm/>
            <Preview/>
            <Footer/>
        </>
    );
}

export default Index;