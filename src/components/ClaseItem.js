export const ClaseItem = ({ title, name, url, imgUrl }) => {

    return (
        <div className="card" style={{ width: "18rem", margin: "15px auto" }}>
            <img src={require('../assets/clases.jpg')}/* src={ imgUrl } */ className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{ name }</p>
                <a href={ url } className="btn btn-primary">Ver Clase</a>
            </div>
        </div>
    )
}
