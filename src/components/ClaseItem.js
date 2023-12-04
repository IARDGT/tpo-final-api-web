import { Link } from 'react-router-dom';

export const ClaseItem = ({ title, profesorName, price, tipoClase, frecuencia, category, calificacion, imgUrl, misClase, urlClase }) => {

    const defaultImage = "https://res.cloudinary.com/dtjbknm5h/image/upload/v1701724404/logo_c21cbs.png";

    console.log("URL de la clase:", urlClase);

    const onImageError = (error) => {
        console.log("ERROR WHILE LOADING IMG...");
        error.target.src = defaultImage;
    }



    return (
        <>
            {
                !misClase &&
                <div className="card" style={{ width: "18rem", margin: "15px auto" }} category={ category }>
                    <img 
                        src={imgUrl}
                        style={{ height: "12rem", objectFit: "cover"}}
                        className="img-fluid rounded-start" alt="..." 
                        onError={e => onImageError(e)}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text texto-clase-item"><strong>Profesor:</strong> {profesorName}</p>
                        <p className="card-text texto-clase-item"><strong>Categoria:</strong> {category}</p>
                        <p className="card-text texto-clase-item"><strong>Tipo de Clase:</strong> {tipoClase}</p>
                        <p className="card-text texto-clase-item"><strong>Frecuencia:</strong> {frecuencia}</p>
                        <p className="card-text texto-clase-item"><strong>Calificacion:</strong> {calificacion}</p>
                        <p className="card-text">{'$'+price}</p>
                        <Link className="btn btn-primary" to={urlClase}>Ver Clase</Link>
                    </div>
                </div>
            }
            {
                misClase &&
                <div className="card mb-3 card-lista-clases-contratadas" category={ category }>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img 
                                src={imgUrl}
                                style={{ height: "12rem", objectFit: "cover"}}
                                className="img-fluid rounded-start" alt="..." 
                                onError={e => onImageError(e)}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{profesorName}</p>
                                <p className="card-text">{'$'+price}</p>
                                <Link className="btn btn-primary" to={urlClase}>Ver Clase</Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
