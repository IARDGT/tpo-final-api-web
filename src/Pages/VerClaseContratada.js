import './style/ContratarClase.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getClaseContratada } from '../controller/claseContratada.controller';
import { comentarioCreate } from '../controller/clase.controller';

export const VerClaseContratada = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [comentarioInfo, setComentarioInfo] = useState('')
    const [calificacion, setCalificacion] = useState('')
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
    const [disabled, setDisabled] = useState(false);

    const isSubmitDisabled = () => {
        return comentarioInfo && calificacion && !disabled
    };

    const handleSubmit = async () => {
        try{
        setLoading(true);
        const comentarioNew = {
            claseContratadaId: id,
            claseId: clase.claseId,
            comentarioInfo: comentarioInfo,
            calificacion: calificacion,
            autor: clase.nombreAlumno
        };

        let resComment = await comentarioCreate(comentarioNew);
        console.log(resComment)
        setDisabled(true);
        setLoading(false);
        } catch (error) {
            alert(error.message);
        }finally {
        setLoading(false);
      }
    }

    const handleEstado = (statusAceptada, statusCompletada) => {
        if (statusAceptada != null) {
            if (statusCompletada) {return "Finalizada"} 
            if (statusAceptada) {return "Confirmada"}
            if (!statusAceptada) {return "Rechazada"}
        } else {
            return "A Confirmar"
        }

    }

    useEffect(() => {
        const handleClase = async () => {
            try {
                const { comentarioInfo, calificacion, ...resClase } = await getClaseContratada(id);
                setClase(resClase);
                if(comentarioInfo === null || calificacion === null ){
                    setComentarioInfo("")
                    setCalificacion ("")
                    setDisabled(false);
                } else {
                    setComentarioInfo(comentarioInfo)
                    setCalificacion(calificacion)
                    setDisabled(true);
                }
                console.log(resClase)

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
                            <p className="row display-6 justify-content-center">
                                Estado: {handleEstado(clase.statusAceptada, clase.statusCompletada)}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row d-flex mx-2 my-2 py-2 justify-content-center align-items-center">
                    {clase.statusAceptada && clase.statusCompletada && (
                        <div>
                            <h3 className='display-6'>Deja un comentario</h3>
                            <textarea
                                className="form-control form-control-lg mb-3"
                                placeholder="Comentario"
                                onChange={(e) => setComentarioInfo(e.target.value)}
                                value={comentarioInfo}
                                disabled={disabled}
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
                                            value={calificacion}
                                            onChange={(e) => setCalificacion(e.target.value)}
                                            disabled={disabled}
                                        />
                                        <div className="stars" style={{ width: `${calificacion * 20}%` }}></div>
                                    </div>
                                    {calificacion}
                                </label>
                            </div>
                            <div className="col-6 mb-4 d-grid gap-2 d-md-flex justify-content-md-end">
                                <button
                                    type="button"
                                    className="btn btn-primary me-md-2"
                                    onClick={() => handleSubmit()}
                                    disabled={!isSubmitDisabled()}
                                >
                                    {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : <span>Subir Comentario</span>}
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