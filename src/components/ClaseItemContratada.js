import { useState, useEffect } from 'react';
import { updateStatusClase } from '../controller/claseContratada.controller';

export const ClaseItemContratada = ({ clase }) => {
    const defaultImage = "https://res.cloudinary.com/dtjbknm5h/image/upload/v1701724404/logo_c21cbs.png";
    const [statusAceptada, setStatusAceptada] = useState(clase.statusAceptada);

    const onImageError = (error) => {
        console.log("ERROR WHILE LOADING IMG...");
        error.target.src = defaultImage;
    }

    const claseContratadaID = clase.claseContratadaId;

    useEffect(() => {
        if (statusAceptada != null) {
            if (clase.statusAceptada) {
                setStatusAceptada('Clase aceptada');
            }
        }
    }, [statusAceptada, clase.statusAceptada]);

    const handleStatusClase = async (statusClaseContratada) => {
        try {
            let updateResponse = await updateStatusClase(claseContratadaID, statusClaseContratada);
            if (updateResponse.ok) {
                if(statusClaseContratada){
                    setStatusAceptada('Clase aceptada');
                } else{
                    setStatusAceptada('Clase rechazada');
                }
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
                            {statusAceptada === 'Clase aceptada' && (<p className="card-text"><strong>Estado: </strong>{clase.statusCompletada? "Clase Finalizada":"Clase Pendiente"}</p>)}
                            <p className="card-text"><strong>{statusAceptada}</strong></p>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
