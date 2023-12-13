import './style/ContratarClase.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getClaseContratada } from '../controller/claseContratada.controller';

export const VerClaseContratada = () => {

    const { id } = useParams();
    const [clase, setClase] = useState({
        claseId: '',
        title: '',
        statusCompletada: false,
        statusAceptada: false,
        telefono: '',
        mail: '',
        horario: '',
        mensaje: '',
        imgUrl: 'blackboard.jpg',
        nombreAlumno: '',
        urlClase: ''
    });

    useEffect(() => {
        const handleClase = async () => {
            try {
                const res = await getClaseContratada(id);
                setClase(res);
            } catch (error) {
                console.error('Error al obtener datos del catálogo:', error);
                setClase({});
            }
        };

        handleClase();
    }, [id]);

    return (
        <>
            <div className="contratar-clase-container">
                <div className="row d-flex mx-2 my-2 justify-content-center align-items-center" >
                    <div className="col-lg-7">
                        <h2>{clase.title}</h2>
                    </div>
                    <div className="col-lg-5 justify-content-center">
                        <div className="card-img-top d-flex justify-content-center align-items-center">
                            <img
                                id="cardImage"
                                src={(clase.imgUrl)}
                                className="img-fluid"
                                style={{ maxWidth: '100%', height: '20rem', objectFit: 'cover' }}
                                alt="Imagen representativa de la clase a contratar."
                            />
                        </div>
                    </div>
                </div>
                <div className="row d-flex mx-2 my-2 py-2 justify-content-center align-items-center">
                    <div>
                        <div>
                            <h3 className="d-flex mt-4">Datos del alumno:</h3>
                            <p>Nombre del alumno: {clase.nombreAlumno}</p>
                            <p>Telefono del alumno: {clase.telefono}</p>
                            <p>Email del alumno: {clase.mail}</p>
                            <p>Horario: {clase.horario}</p>
                            <p>Mensaje: {clase.mensaje}</p>
                            <form class="form-acpetar">
                                <div>
                                    <input className="form-check-input constent-form" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label constent-form" htmlFor="flexCheckDefault">
                                        Aceptar términos y condiciones
                                    </label>
                                </div>
                                <div class="button-container">
                                    <button className="btn btn-primary constent-form" type="button">Confirmar Clase</button>
                                    <button className="btn btn-warning constent-form" type="button">Cancelar Clase</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerClaseContratada;




