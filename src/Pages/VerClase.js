import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Comentario } from "../components/Comentario";

import "./style/VerClases.css";

export const VerClase = () => {
    return (
        <>
            <Navbar />
            <div className="ver-clases-container">
                <div className="row d-flex mx-5 my-2 py-5 justify-content-center align-items-start ver-clases-content-1" >
                    <div className="col-lg-6 order-2 order-lg-1">
                        <h2>Titulo de la Clase</h2>
                        <h5><span>Nombre del profesor</span></h5>
                        <p>
                            Descripción de la clase lorem Nemo enim ipsam voluptatem quia voluptas si aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                        </p>
                        <button type="button" className="btn btn-primary btn-lg mt-2">Inscribirse</button>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        {/* <img src={require('../assets/login_img2.jpg')} className="img-fluid" alt="Sample image" />  */}
                        <div class="card-img-top d-flex justify-content-center align-items-center">
                            <img src={require('../assets/guitarra.jpg')} class=" img-fluid"
                                style={{ maxWidth: '100%', height: '20rem', objectFit: 'fill' }} alt="Imagen representativa de la clase a crear." />
                        </div>
                    </div>
                </div>
                <div className="ver-clases-content-2">
                    <Comentario editar={true} />
                    <Comentario editar={true} />
                    <Comentario editar={true} />
                </div>
            </div>
        </>
    )
}

export default VerClase;