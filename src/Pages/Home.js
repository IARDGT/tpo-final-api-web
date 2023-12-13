import { ListaClasesHome } from "../components/ListaClasesHome";
import { Link } from 'react-router-dom';
import { Comentario } from "../components/Comentario";
import { PasosClase } from "../components/PasosClase";

import "./style/Home.css";
import { ListaComentarios } from "../components/ListaComentarios";


export const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="home-vitrina">
                    <div className="content-vitrina">
                        <h1>Encuentra tu clase ideal,
                            con tu profesor ideal</h1>
                        <Link className="btn btn-outline-light" to="/catalogo"><strong>Catalogo de Clases</strong></Link>
                    </div>
                </div>
                <PasosClase />
                <div className="clases-home">
                    <h2>Aqui te mostramos algunas de nuestras clases</h2>
                    <h3>En línea o presencial, elige entre más de 100 clases disponibles.</h3>
                    <ListaClasesHome cantidadMax={8} misClase={false} urlClase="ver-clase" />
                </div>
                <div className="comentarios-home">
                    <h2>Comentarios de Nuestros Alumnos</h2>
                    <ListaComentarios />
                </div>
                <div className="logo-empresas">
                    <h2>Empresas que nos recomiendan</h2>
                    <div className="d-flex flex-row mb-1 lista-logos">
                        <img src={require('../assets/logo_mercadolibre.png')} className="img-fluid rounded-start" alt="..." />
                        <img src={require('../assets/logo_santander.png')} className="img-fluid rounded-start" alt="..." />
                        <img src={require('../assets/logo_accenture.png')} className="img-fluid rounded-start" alt="..." />
                        <img src={require('../assets/logo_rappi.png')} className="img-fluid rounded-start" alt="..." />
                        <img src={require('../assets/logo_netflix.png')} className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}