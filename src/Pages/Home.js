import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Search } from "../components/Search";



export const Home = () => {
    return (
        <>
            <Navbar />
            <div
                style={{ maxWidth: "75%",
                         margin: "auto" }}>
                <div>
                    <h1>Encuentra tu clase ideal,
                        con tu profesor ideal.</h1>
                    <Search />
                </div>
                <div>
                    <h2>Pasos para iniciar tus clases</h2>
                    <div>
                        <div className="card w-76 mb-3" style={{ marginLeft: "10px", marginRight: "10px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="..." className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Busca una Clase</h5>
                                        <p className="card-text">Ingresa a nuestro catalogo, escribe la clase que desas ver y presiona el boton de buscar.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card w-76 mb-3" style={{ marginLeft: "10px", marginRight: "10px" }}>
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Selecciona una Clase</h5>
                                        <p className="card-text">Selecciona la clase que más te guste, lee los detalles de la misma y si estas de acuerdo con ella, selecciona inscribir.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src="..." className="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="card w-76 mb-3" style={{ marginLeft: "10px", marginRight: "10px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="..." className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">LLena el formulario</h5>
                                        <p className="card-text">Una vez presionado el boton de inscribir, aparecera un formulario el cual deberas llenar tus datos una vez completado selecciona el boton de completar inscripción, el profesor que dicta la clase se pondra en contacto contigo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className="list-group list-group-horizontal" style={{ border: "0px" }}>
                        <li className="list-group-item">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="list-group list-group-horizontal-sm">
                        <li className="list-group-item">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <h1>Home</h1>
            </div>
            <Footer />
        </>
    )
}