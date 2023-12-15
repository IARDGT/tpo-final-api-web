import './style/ContratarClase.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getClaseContratada } from '../controller/claseContratada.controller';
import { comentarioCreate, listaComentariosGet } from '../controller/clase.controller';

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
        urlClase: '',
        comentarioInfo: '',
        calificacion: ''
    });

    const [editable, setEditable] = useState(false);

    const isSubmitDisabled = () => {
        return clase.comentarioInfo && clase.calificacion && editable
    };

    const handleSubmit = async () => {
        const comentarioNew = {
            claseContratadaId: id,
            claseId: clase.claseId,
            comentarioInfo: clase.comentarioInfo,
            calificacion: clase.calificacion,
            autor: clase.nombreAlumno
        };

        comentarioCreate(comentarioNew);
        setEditable(true);
    }

    useEffect(() => {
        const handleClase = async () => {
            try {
                const res = await getClaseContratada(id);
                setClase(res);
                if(clase.comentarioInfo != '' || clase.calificacion != '' ){
                    setEditable(false);
                }
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
                <div className="row d-flex mx-5 my-2 justify-content-center align-items-center" >
                    <div className="col-lg-7">
                        <h2 className='display-2'>{clase.title}</h2>
                        <p className="display-6">Datos del alumno:</p>
                        <p className="lead"><strong>Nombre del alumno: </strong><em>{clase.nombreAlumno}</em></p>
                        <p className="lead"><strong>Telefono del alumno: </strong><em>{clase.telefono}</em></p>
                        <p className="lead"><strong>Email del alumno: </strong><em>{clase.mail}</em></p>
                        <p className="lead"><strong>Horario: </strong><em>{clase.horario}</em></p>
                        <p className="lead"><strong>Mensaje: </strong><em>{clase.mensaje}</em></p>
                    </div>
                    <div className="mt-5 col-lg-5 justify-content-center">
                        <div className="row card-img-top d-flex justify-content-center align-items-center">
                            <img
                                id="cardImage"
                                src={(clase.imgUrl)}
                                className="img-fluid rounded"
                                style={{ maxWidth: '100%', height: '20rem', objectFit: 'cover' }}
                                alt="Imagen representativa de la clase a contratar."
                            />
                            <p className="row display-5 justify-content-center">
                                Estado: {clase.statusAceptada ? (clase.statusCompletada ? "Finalizada" : "Confirmada") : "A confirmar"}</p>
                        </div>
                    </div>
                </div>
                <div className="row d-flex mx-2 my-2 py-2 justify-content-center align-items-center">
                    {clase.statusAceptada && clase.statusCompletada && (
                        <div>
                            <h3>Deja un comentario</h3>
                            <textarea
                                className="form-control form-control-lg mb-3"
                                placeholder="Comentario"
                                onChange={(e) => setClase({ ...clase, comentarioInfo: e.target.value })}
                                value={clase.comentarioInfo}
                                disabled={!editable}
                            ></textarea>
                            <div>
                                <label>
                                    Califica que tal te ha parecido la clase (0 al 5):
                                    <div className="star-rating">
                                        <input
                                            type="range"
                                            min={0}
                                            max={5}
                                            step={0.5}
                                            value={clase.calificacion}
                                            onChange={(e) => setClase({ ...clase, calificacion: e.target.value })}
                                            disabled={!editable}
                                        />
                                        <div className="stars" style={{ width: `${clase.calificacion * 20}%` }}></div>
                                    </div>
                                    {clase.calificacion}
                                </label>
                            </div>
                            <div className="col-6 d-grid gap-2 d-md-flex justify-content-md-end">
                                <button
                                    type="button"
                                    className="btn btn-primary me-md-2"
                                    onClick={() => handleSubmit()}
                                    disabled={!isSubmitDisabled()}
                                >
                                    Contratar Clase
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default VerClaseContratada;