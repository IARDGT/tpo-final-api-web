import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Pages/style/Home.css";

export const PasosClase = () => {
    return (
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
    );
  };
  
export default PasosClase;


