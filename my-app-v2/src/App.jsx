import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Route, Routes} from 'react-router-dom'

// Import custom components
import NavBar from './components/pageComponents/navigation/Navbar.jsx'
import LoginForm from './components/pageComponents/forms/LoginForm.jsx'
import Register from './components/pages/register.jsx'
import Catalogo from './components/pages/catalogo.jsx'
import Cuenta from './components/pages/cuenta.jsx'
import Preview from './components/pageComponents/navigation/Preview.jsx'

function App() {

  return (
    // Start of the page
    <>
        {/* Navbar fijo */}
        <NavBar />



        {/* Rutas */}
        <Routes>
          {/* Muestra por defecto el formulario de Iniciar sesión */}
          <Route path="/" element={<LoginForm/>}></Route>

          {/* para redireccionar a la ventana de registro */}
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/catalogo" element={<Catalogo/>}></Route>
          <Route path="/cuenta" element={<Cuenta/>}></Route>

        </Routes>
        {/* Visualización del catálogo sin opción de reservar. */}
        <Preview />
    </>
  )
}

export default App
