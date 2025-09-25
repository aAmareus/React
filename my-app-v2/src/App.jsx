import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Route, Routes} from 'react-router-dom';

// Import custom pages
import Index from './components/pages/index.jsx'
import Register from './components/pages/register.jsx'
import Adminpanel from './components/pages/adminpanel.jsx'
import Dashboard from './components/pages/Dashboard.jsx'

function App() {

  return (
    // Start of the page
    <>
       {/* Rutas */}
        <Routes>
          {/* Muestra por defecto el formulario de Iniciar sesión */}
          <Route path="/" element={<Index/>}></Route>

          {/* para redireccionar a la ventana de registro */}
          <Route path="/register" element={<Register/>}></Route>

          {/* Rutas para los dashboards */}
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/admin-panel" element={<Adminpanel/>}></Route>

        </Routes>
    </>
  )
}

export default App;
