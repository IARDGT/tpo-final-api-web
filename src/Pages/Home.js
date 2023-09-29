import { ListaClases } from "../components/ListaClases";
import { Navbar } from "../components/Navbar";
import { Search } from "../components/Search";
import Comentario from "../components/Comentario";

import "./style/Home.css";


export const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-conteiner">
                <div className="home-vitrina">
                    <div className="content-vitrina">
                        <h1 >Encuentra tu clase ideal,
                            con tu profesor ideal</h1>
                        <Search />
                    </div>
                </div>
                <div className="pasos-home">
                    <h2>Pasos para iniciar tus clases</h2>
                    <div>
                        <div className="card w-76 mb-3 card-container-home" style={{ marginLeft: "10px", marginRight: "10px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={require('../assets/paso_1.jpg')} className="img-fluid rounded-start img-pasos-home" alt="..." />
                                </div>
                                <div className="col-md-8 ">
                                    <div className="card-body card-content-home">
                                        <h5 className="card-title">Busca una Clase</h5>
                                        <p className="card-text">Ingresa a nuestro catalogo, escribe la clase que desas ver y presiona el boton de buscar.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card w-76 mb-3 card-container-home" style={{ marginLeft: "10px", marginRight: "10px" }}>
                            <div className="row g-0">
                                <div className="col-md-8 card-reverse">
                                    <div className="card-body card-content-home">
                                        <h5 className="card-title">Selecciona una Clase</h5>
                                        <p className="card-text">Selecciona la clase que más te guste, lee los detalles de la misma y si estas de acuerdo con ella, selecciona inscribir.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-reverse">
                                    <img src={require('../assets/paso_2.jpg')} className="img-fluid rounded-start img-pasos-home" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="card w-76 mb-3 card-container-home" style={{ marginLeft: "10px", marginRight: "10px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={require('../assets/paso_3.jpg')} className="img-fluid rounded-start img-pasos-home" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body card-content-home">
                                        <h5 className="card-title">LLena el formulario</h5>
                                        <p className="card-text">Una vez presionado el boton de inscribir, aparecera un formulario el cual deberas llenar tus datos una vez completado selecciona el boton de completar inscripción, el profesor que dicta la clase se pondra en contacto contigo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clases-home">
                    <h2>Aqui te mostramos algunas de nuestras clases</h2>
                    <h3>En línea o presencial, elige entre más de 100 clases disponibles.</h3>
                    <ListaClases cantidad={8} misClase={false} urlClase="ver-clase" />
                </div>
                <div className="comentarios-home">
                    <h2>Comentarios de Nuestros Alumnos</h2>
                    <div className="grid2x2">
                        <div className="box box1">
                            <Comentario editar={false} className="comentario-home" />
                        </div>
                        <div className="box box2">
                            <Comentario editar={false} className="comentario-home" />
                        </div>
                        <div className="box box3">
                            <Comentario editar={false} className="comentario-home" />
                        </div>
                        <div className="box box4">
                            <Comentario editar={false} className="comentario-home" />
                        </div>
                    </div>
                </div>
                <div className="registrar-home">
                    <h2>¡Convertite en Profesor!</h2>
                    <div className="grid2x2">
                        <div className="box box1">
                            <h3>Unete a nuestra comunidad de enseñanza y comparte tu conocimiento con el mundo.</h3>
                        </div>
                        <div className="box box2 d-flex flex-row mb-1">
                            <button type="button" className="btn btn-primary" style={{ marginLeft: 10 + 'px', marginRight: 10 + 'px', width: "150px", height: "50px" }}>Join us</button>
                            <button type="button" className="btn btn-outline-primary" style={{ marginLeft: 10 + 'px', marginRight: 10 + 'px', width: "150px", height: "50px" }}>Contact us</button>
                        </div>
                    </div>
                </div>
                <div className="logo-empresas">
                    <h2>Empresas que nos recomiendan</h2>
                    <div className="d-flex flex-row mb-1 lista-logos">
                        <img src={require('../assets/logo_mercadolibre.png')}  className="img-fluid rounded-start" alt="..." />
                        <img src={require('../assets/logo_santander.png')}  className="img-fluid rounded-start" alt="..." />
                        <img src={require('../assets/logo_accenture.png')}  className="img-fluid rounded-start" alt="..." />
                        <img src={require('../assets/logo_rappi.png')}  className="img-fluid rounded-start" alt="..." />
                        <img src={require('../assets/logo_netflix.png')}  className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}