import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams 
} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Catalogo } from "./Pages/Catalogo";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { CrearClase } from './Pages/CrearClase';
import { VerClase } from './Pages/VerClase';
import { ContratarClase } from './Pages/ContratarClase';
import { VerClaseContratada } from './Pages/VerClaseContratada';
import { ListaClasesProfesor } from './Pages/ListaClasesProfesor';
import { ListaClasesContratadas } from './Pages/ListaClasesContratadas';
import { MiPerfil } from './Pages/MiPerfil';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { NavbarAuth } from './components/NavbarAuth';
import { useAuth } from './components/AuthContext';
import 'bootstrap/dist/js/bootstrap.bundle';


export const App = () => {
    const { auth } = useAuth();

    return (
        <BrowserRouter >
            {auth ? <NavbarAuth /> : <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo/:categoria" element={<Catalogo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/crear-clase" element={<CrearClase />} />
                <Route path="/ver-clase/:id" element={<VerClase />} />
                <Route path="/ver-clase/contratar/:id" element={<ContratarClase />} />
                <Route path="/ver-clase-contratada" element={<VerClaseContratada />} />
                <Route path="/mis-clases" element={<ListaClasesProfesor />} />
                <Route path="/mi-perfil" element={<MiPerfil />} />
                <Route path="/lista-clases-contratada" element={<ListaClasesContratadas />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}