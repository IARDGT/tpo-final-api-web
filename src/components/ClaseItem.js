export const ClaseItem = ({ title, profesorName, price, category, calificacion, url, imgUrl, misClase, urlClase }) => {

    return (
        <>
            {
                !misClase &&
                <div className="card" style={{ width: "18rem", margin: "15px auto" }} category={ category }>
                    <img src={require(`../assets/${imgUrl}`)}
                    style={{ height: "12rem", objectFit: "cover"}}
                    className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{'Profesor: '+profesorName}</p>
                        <p className="card-text">{'Categoria: '+category}</p>
                        <p className="card-text">{'Calificacion: '+calificacion}</p>
                        <p className="card-text">{'$'+price}</p>
                        <a href={ urlClase } className="btn btn-primary">Ver Clase</a>
                    </div>
                </div>
            }
            {
                misClase &&
                <div className="card mb-3 card-lista-clases-contratadas" category={ category }>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={require(`../assets/${imgUrl}`)} 
                            style={{ height: "12rem", objectFit: "cover"}}
                            className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{profesorName}</p>
                                <p className="card-text">{'$'+price}</p>
                                <a href={ urlClase } className="btn btn-primary">Ver Clase</a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
