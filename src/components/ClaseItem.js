export const ClaseItem = ({ title, name, url, imgUrl, misClase, urlClase }) => {

    return (
        <>
            {
                !misClase &&
                <div className="card" style={{ width: "18rem", margin: "15px auto" }}>
                    <img src={require('../assets/clases.jpg')}/* src={ imgUrl } */ className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{name}</p>
                        <a href={ urlClase } className="btn btn-primary">Ver Clase</a>
                    </div>
                </div>
            }
            {
                misClase &&
                <div className="card mb-3 card-lista-clases-contratadas">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={require('../assets/clases.jpg')} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{name}</p>
                                <a href={ urlClase } className="btn btn-primary">Ver Clase</a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
