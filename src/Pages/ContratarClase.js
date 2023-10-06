import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../helpers/clases-test.json"
import './style/ContratarClase.css';

export const ContratarClase = () => {

    const { id } = useParams();
    const [clase, setClase] = useState({});
    const [imageUrl, setImageUrl] = useState('blackboard.jpg');

    useEffect(() => {
        const claseNueva = data.filter(clase => clase.id == id);
        const singleClase = claseNueva[0] || {};
        setClase(singleClase);
        setImageUrl(singleClase.imgUrl);
    }, [id]);
    

    return (
        <>
            <div className="contratar-clase-container">
                <div className="row d-flex mx-2 my-2 justify-content-center align-items-center" >
                    <div className="col-lg-7">
                        <h2>{clase.title}</h2>
                        <h4>Profe: <span>{clase.profesorName}</span></h4>
                        <h5>Precio: ${clase.price}</h5>
                        <p>{clase.description}</p>
                        <p className='btn btn-secondary'>{clase.category}</p>

                    </div>
                    <div className="col-lg-5 justify-content-center">
                        <div className="card-img-top d-flex justify-content-center align-items-center">
                            <img
                                id="cardImage"
                                src={require('../assets/'+imageUrl)} 
                                className="img-fluid"
                                style={{ maxWidth: '100%', height: '20rem', objectFit: 'cover' }}
                                alt="Imagen representativa de la clase a contratar."
                            />

                        </div>
                    </div>
                </div>
                <div className="row d-flex mx-2 my-2 py-2 justify-content-center align-items-center">
                        <div>
                            <form>
                                <h3 className="d-flex mt-4">Datos del alumno:</h3>

                                <div className="form-outline mb-3">
                                    <input type="text" id="formNombre" className="form-control form-control-lg"
                                        placeholder="Nombre" />
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="text" id="formApellido" className="form-control form-control-lg"
                                        placeholder="Apellido" />
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="text" id="formTelefono" className="form-control form-control-lg"
                                        placeholder="Telefono" />
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="text" id="formEmail" className="form-control form-control-lg"
                                        placeholder="Email" />
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="text" id="formHorario" className="form-control form-control-lg"
                                        placeholder="Horario" />
                                </div>
                                <textarea className="form-control form-control-lg mb-3" placeholder="Descripción"></textarea>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
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

export default ContratarClase;




