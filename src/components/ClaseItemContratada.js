import { useState, useEffect } from 'react';
import { updateStatusClase, updateStatusClaseCompletada } from '../controller/claseContratada.controller';

export const ClaseItemContratada = ({ clase }) => {
    const defaultImage = "https://res.cloudinary.com/dtjbknm5h/image/upload/v1701724404/logo_c21cbs.png";
    const [statusAceptada, setStatusAceptada] = useState(clase.statusAceptada);
    const [statusCompletada, setStatusCompletada] = useState(clase.statusCompletada);

    const onImageError = (error) => {
        console.log("ERROR WHILE LOADING IMG...");
        error.target.src = defaultImage;
    }

    const claseContratadaID = clase.claseContratadaId;

/*     useEffect(() => {
        if (statusAceptada != null) {
            if (clase.statusAceptada) {
                setStatusAceptada(true);
            } else {
                setStatusAceptada(false)
            }
        }
    }, [statusCompletada,clase.statusAceptada]); */

    const handleStatusClase = async (statusClaseContratada) => {
        try {
            let updateResponse = await updateStatusClase(claseContratadaID, statusClaseContratada);
            if (updateResponse.ok) {
                if(statusClaseContratada){
                    setStatusAceptada(true);
                } else{
                    setStatusAceptada(false);
                }
            }
        } catch (error) {
            console.error('Error al actualizar el estado de la clase:', error);
        }
    }

    const handleStatusCompletada = async (value) => {
        console.log('value ====>',value);
        try {
            let updateResponse = await updateStatusClaseCompletada(claseContratadaID, value);
            if (updateResponse.ok) {
                console.log('Se actualizo correctamente la clase');
                setStatusCompletada(true);
            }
        } catch (error) {
            console.error('Error al actualizar el estado de la clase:', error);
        }
    }

    return (
        <>
            <div className="card" style={{ width: "18rem", margin: "15px auto" }} category={clase.category}>
                <img src={clase.imgUrl}
                    style={{ height: "12rem", objectFit: "cover" }}
                    className="card-img-top" alt="..."
                    onError={e => onImageError(e)} />
                <div className="card-body">
                    <h5 className="card-title">{clase.title}</h5>
                    <p className="card-text texto-clase-item"><strong>Alumno:</strong> {clase.nombreAlumno}</p>
                    <p className="card-text texto-clase-item"><strong>Telefono:</strong> {clase.telefono}</p>
                    <p className="card-text texto-clase-item"><strong>Mail:</strong> {clase.mail}</p>
                    <p className="card-text texto-clase-item"><strong>Horario:</strong> {clase.horario}</p>
                    <p className="card-text"><strong>Mensaje:</strong> {clase.mensaje}</p>
                    {statusAceptada === null && (
                        <>
                            <button className="btn btn-primary" onClick={(e) => handleStatusClase(true)}>Aceptar Clase</button>
                            <button className="btn btn-danger" onClick={(e) => handleStatusClase(false)}>Rechazar Clase</button>

                        </>
                    )}
                    {statusAceptada != null && (
                        <>
                            <p className="card-text"><strong>{statusAceptada? "Clase Aceptada":"Clase Rechazada"}</strong></p>
                            {statusAceptada && (<p className="card-text"><strong>Estado: </strong>{statusCompletada? "Clase Finalizada":"Clase Pendiente"}</p>)}
                            {!statusCompletada && statusAceptada &&<button className="btn btn-primary" onClick={(e) => handleStatusCompletada(true)}>Completar Clase</button>}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
