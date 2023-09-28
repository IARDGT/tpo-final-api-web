import { Navbar } from "../components/Navbar";

export const VerClaseContratada = () => {

    return (
        <>
        <Navbar />
        <div className="row d-flex mx-5 my-2 py-2 justify-content-center align-items-center" style={{
                    maxWidth: "75%",
                    margin: "auto"
                }}>
            <div className="col-lg-6">
                <h2>Nombre de la clase</h2>
                <p>
                    Instrucciones de como inscribirse a la clase Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
            </div>
            <div className="col-lg-6 justify-content-center">
                <div class="card-img-top d-flex justify-content-center align-items-center">
                    <img
                    id="cardImage"
                    src={require('../assets/guitarra.jpg')}
                    className="img-fluid"
                    style={{ maxWidth: '100%', height: '20rem', objectFit: 'fill' }}
                    alt="Imagen representativa de la clase a crear."
                    />

                </div>
            </div>


            <div className="row d-flex mx-5 my-2 py-2 justify-content-center align-items-center">
                <div>
                    <form>
                        <h3 className="d-flex mt-4">Datos del alumno:</h3>

                        <div className="form-outline mb-3">
                            <input type="text" className="form-control form-control-lg"
                            value="Nombre" disabled readonly/>
                        </div>
                       

                        <div className="form-outline mb-3">
                            <input type="text" className="form-control form-control-lg"
                                value="Apellido" disabled readonly/>
                        </div>

                        <div className="form-outline mb-3">
                            <input type="text" className="form-control form-control-lg"
                                value="Telefono" disabled readonly/>
                        </div>

                        <div className="form-outline mb-3">
                            <input type="text" className="form-control form-control-lg"
                                value="Email" disabled readonly/>
                        </div>

                        <div className="form-outline mb-3">
                            <input type="text" className="form-control form-control-lg"
                                value="Horario" disabled readonly/>
                        </div>

                        <textarea class="form-control form-control-lg mb-3" value="Descripción" disabled readonly></textarea>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Aceptar términos y condiciones
                            </label>
                        </div>
                        
                        <button type="button" className="btn btn-primary btn-lg mt-3">Contratar Clase</button>
                        
                    </form>
                </div>

            </div>

        </div>
        </>
    )
}

export default VerClaseContratada;




