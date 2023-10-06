import { ListaClases } from "../components/ListaClases";
import { Search } from "../components/Search";
import { Comentario } from "../components/Comentario";
import { PasosClase } from "../components/PasosClase";

import "./style/Home.css";


export const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="home-vitrina">
                    <div className="content-vitrina">
                        <h1 >Encuentra tu clase ideal,
                            con tu profesor ideal</h1>
                        <Search />
                    </div>
                </div>
                <PasosClase />
                <div className="clases-home">
                    <h2>Aqui te mostramos algunas de nuestras clases</h2>
                    <h3>En línea o presencial, elige entre más de 100 clases disponibles.</h3>
                    <ListaClases cantidadMax={8} misClase={false} urlClase="ver-clase" />
                </div>
                <div className="comentarios-home">
                    <h2>Comentarios de Nuestros Alumnos</h2>
                    <div className="grid2x2">
                        <div className="box box1">
                            <Comentario
                                nombreClase="Baile Tango"
                                description="El profesor demuestra un profundo conocimiento del tema y su pasión por enseñar es evidente en cada clase. Siempre está dispuesto a responder preguntas y brindar apoyo adicional cuando los estudiantes lo necesitan. Su estilo de enseñanza hace que el material sea fácil de entender y atractivo para todos en el aula."
                                autor="Franco"
                                creationDate="23/05/2023"
                                editar={false}
                                key="4487fd8a-a1ae-4cca-8302-de1860224a0c"
                            />
                        </div>
                        <div className="box box2">
                            <Comentario
                                nombreClase="Dibujo"
                                description="Este profesor es increíblemente comprometido con el éxito de sus estudiantes. Va más allá de lo esperado para proporcionar recursos adicionales, sesiones de tutoría y retroalimentación constructiva. Sus clases son dinámicas y participativas, lo que hace que aprender sea una experiencia agradable. Realmente es un modelo a seguir en la educación."
                                autor="Iván"
                                creationDate="23/05/2023"
                                editar={false}
                                key="489f28fb-779e-4930-9913-6fcb7f0ec7a8"
                            />
                        </div>
                        <div className="box box3">
                            <Comentario
                                nombreClase="Matemática Para Principiantes"
                                description="El profesor demuestra un profundo conocimiento del tema y su pasión por enseñar es evidente en cada clase. Siempre está dispuesto a responder preguntas y brindar apoyo adicional cuando los estudiantes lo necesitan. Su estilo de enseñanza hace que el material sea fácil de entender y atractivo para todos en el aula."
                                autor="Franco"
                                creationDate="23/05/2023"
                                editar={false}
                                key="4487fd8a-a1ae-4cca-8302-de1860224a0c"
                            />
                        </div>
                        <div className="box box4">
                            <Comentario
                                nombreClase="Guitarra"
                                description="Este profesor es increíblemente comprometido con el éxito de sus estudiantes. Va más allá de lo esperado para proporcionar recursos adicionales, sesiones de tutoría y retroalimentación constructiva. Sus clases son dinámicas y participativas, lo que hace que aprender sea una experiencia agradable. Realmente es un modelo a seguir en la educación."
                                autor="Iván"
                                creationDate="23/05/2023"
                                editar={false}
                                key="489f28fb-779e-4930-9913-6fcb7f0ec7a8"
                            />
                        </div>
                    </div>
                </div>
                {/*                 <div className="registrar-home">
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
                </div> */}
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