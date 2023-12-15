import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Catalogo } from "./Pages/Catalogo";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Recuperar } from "./Pages/Recuperar";
import { RecuperarForm } from "./Pages/RecuperarForm";
import { CrearClase } from './Pages/CrearClase';
import { VerClase } from './Pages/VerClase';
import { ContratarClase } from './Pages/ContratarClase';
import { VerClaseContratada } from './Pages/VerClaseContratada';
import { ListaClasesProfesor } from './Pages/ListaClasesProfesor';
import { MisClasesContratadas } from './Pages/MisClasesContratadas';
import { MiPerfil } from './Pages/MiPerfil';
import { MiPerfilEditar } from './Pages/MiPerfilEditar';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { NavbarAuth } from './components/NavbarAuth';
import { useAuth } from './components/AuthContext';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../src/styles.css';


export const App = () => {
    const { auth } = useAuth();
    return (
        <BrowserRouter >
            {auth ? <NavbarAuth /> : <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/recuperar" element={<Recuperar />} />
                <Route path="/recuperar/:id" element={<RecuperarForm />} />
                <Route path="/crear-clase" element={<CrearClase />} />
                <Route path="/ver-clase/:id" element={<VerClase />} />
                <Route path="/ver-clase/contratar/:id" element={<ContratarClase />} />
                <Route path="/ver-clase-contratada/:id" element={<VerClaseContratada />} />
                <Route path="/mis-clases/:id" element={<ListaClasesProfesor />} />
                <Route path="/mis-clases-contratadas" element={<MisClasesContratadas />} />
                <Route path="/mi-perfil/:id" element={<MiPerfil />} />
                <Route path="/mi-perfil/editar/:id" element={<MiPerfilEditar />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}