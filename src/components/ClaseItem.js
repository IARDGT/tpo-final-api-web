import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { eliminarClase } from '../controller/clase.controller';

export const ClaseItem = ({ clase, misClase, urlClase }) => {

    const defaultImage = "https://res.cloudinary.com/dtjbknm5h/image/upload/v1701724404/logo_c21cbs.png";
    const [deleted, setDeleted] = useState(false);

    const onImageError = (error) => {
        console.log("ERROR WHILE LOADING IMG...");
        error.target.src = defaultImage;
    }

    const handleEliminarClase = async () => {
        console.log(clase.claseId);
        let res = await eliminarClase(clase.claseId);
        setDeleted(true);
        console.log('res ---->',res);
    }

    if (deleted) {
        return null;
    }


    return (
        <>
            {
                !misClase &&
                <div className="card" style={{ width: "18rem", margin: "15px auto" }} category={clase.category}>
                    <img
                        src={clase.imgUrl}
                        style={{ height: "12rem", objectFit: "cover" }}
                        className="img-fluid rounded-start" alt="..."
                        onError={e => onImageError(e)}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{clase.title}</h5>
                        <p className="card-text texto-clase-item"><strong>Profesor:</strong> {clase.profesorName}</p>
                        <p className="card-text texto-clase-item"><strong>Categoria:</strong> {clase.category}</p>
                        <p className="card-text texto-clase-item"><strong>Tipo de Clase:</strong> {clase.tipoClase}</p>
                        <p className="card-text texto-clase-item"><strong>Frecuencia:</strong> {clase.frecuencia}</p>
                        <p className="card-text texto-clase-item"><strong>Calificacion:</strong> {clase.calificacion}</p>
                        <p className="card-text">{'$' + clase.price}</p>
                        <Link className="btn btn-primary" to={urlClase}>Ver Clase</Link>
                    </div>
                </div>
            }
            {
                misClase &&
                <div className="card mb-3 card-lista-clases-contratadas" category={clase.category}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={clase.imgUrl}
                                style={{ height: "12rem", objectFit: "cover" }}
                                className="img-fluid rounded-start" alt="..."
                                onError={e => onImageError(e)}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{clase.title}</h5>
                                <p className="card-text">{clase.profesorName}</p>
                                <p className="card-text">{'$' + clase.price}</p>
                                <Link className="btn btn-primary" to={urlClase}>Ver Clase</Link>
                                <button className="btn btn-danger" onClick={() => {handleEliminarClase()}}>Eliminar Clase</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
