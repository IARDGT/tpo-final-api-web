import { Navbar } from "../components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import "./style/CrearClase.css";


export const CrearClase = () => {

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageSrc = e.target.result;
                document.getElementById('cardImage').src = imageSrc;
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Navbar />
            <div className="crear-clase-container ">
                <div className="row d-flex my-2 py-2 justify-content-center align-items-center" >
                    <div className="col-lg-6 justify-content-center order-2 order-lg-1 px-5 px-lg-0">

                        <h2>Crear una clase</h2>
                        <p>
                            Instrucciones de como crear la clase
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore
                        </p>

                        <form>
                            <h4 className="d-flex mt-4">Datos de la clase:</h4>

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

                        <div class="card mx-4" aria-hidden="true">
                            <div class="card-img-top d-flex justify-content-center align-items-center">
                                <img
                                    id="cardImage"
                                    src={require('../assets/guitarra.jpg')}
                                    className="img-fluid"
                                    alt="Imagen representativa de la clase a crear."
                                />

                            </div>

                            <div class="card-body">
                                <h5 class="card-title">
                                    <span class="col-6">Subir imagen</span>
                                </h5>
                                <p class="card-text text-center">
                                    <p>
                                        Instrucciones de como crear la clase Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        Instrucciones de como crear la clase Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        Instrucciones de como crear la clase Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    </p>
                                </p>

                                <div class="input-group mb-3">
                                    <input type="file" accept="image/*" class="form-control" id="imageUpload" onChange={(e) => handleImageUpload(e)}/>
                                    <label class="input-group-text" for="imageUpload"> <FontAwesomeIcon icon={faUpload}/></label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="px-5 px-lg-0 order-3 ">


                    <div className="col-lg-12 form-outline mb-3">
                        <h4 className="d-flex my-3">Descripción de la clase:</h4>
                        <textarea class="form-control form-control-lg" placeholder="Descripción"></textarea>
                    </div>

                    <div class="col-6 form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Aceptar términos y condiciones
                            </label>
                    </div>
                    <div class="col-6 d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary me-md-2" type="button">Crear Clase</button>
                    </div>
                </div>
                </div>

            </div>

        </>
    )
}

export default CrearClase;