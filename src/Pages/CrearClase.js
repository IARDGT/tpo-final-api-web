import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

export const CrearClase = () => {
    return (
        <>
        <Navbar />
        <div className="row d-flex mx-5 justify-content-center align-items-center border border-dark">
            <div className="col-lg-6 order-2 order-lg-1">
                <h2>Crear un clase</h2>
                <p>
                    Instrucciones de como crear la clase
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                </p>
                <form>
                    <h3 className="d-flex mt-4">Datos de la clase:</h3>

                    <div className="form-outline mb-3">
                    <input type="email" id="formEmail" className="form-control form-control-lg"
                        placeholder="Nombre" />
                    </div>

                    <div className="form-outline mb-3">
                    <input type="password" id="formPassword" className="form-control form-control-lg"
                        placeholder="Categoria" />
                    </div>

                    <div className="form-outline mb-3">
                    <input type="password" id="formPassword" className="form-control form-control-lg"
                        placeholder="Nivel" />
                    </div>

                    <div className="form-outline mb-3">
                    <input type="password" id="formPassword" className="form-control form-control-lg"
                        placeholder="Objetivo" />
                    </div>


                </form>
            </div>
            <div className="col-lg-6 justify-content-center order-1 order-lg-2">
                {/* <img src={require('../assets/login_img2.jpg')} className="img-fluid" alt="Sample image" />  */}

                <div class="card mx-4" aria-hidden="true">
                    <div class="card-img-top d-flex justify-content-center align-items-center">
                        <img src={require('../assets/guitarra.jpg')} class=" img-fluid" 
                            style={{ maxWidth: '100%', height: '20rem', objectFit: 'fill' }} alt="Imagen representativa de la clase a crear."/>
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">
                            <span class="col-6">Subir imagen</span>
                        </h5>
                        <p class="card-text">
                            <p>
                            Instrucciones de como crear la clase Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            Instrucciones de como crear la clase Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            Instrucciones de como crear la clase Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>
                        </p>
                        <a href="#" tabindex="-1" class="btn btn-primary col-3">Subir imagen <FontAwesomeIcon icon={faUpload} /></a>
                    </div>
                </div>  
            </div>

            <div className="col-lg-12 order-3 form-outline mb-3">
                <textarea class="form-control form-control-lg" placeholder="Descripción"></textarea>
                <button type="button" className="btn btn-primary btn-lg mt-3">Crear Clase</button>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default CrearClase;