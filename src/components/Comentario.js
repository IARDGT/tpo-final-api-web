

export const Comentario = ({nombreClase, description, autor, creationDate, editar}) => {

    

    return (
        <div className="card mx-5 my-2 px-3">
            <div className="card-body">
                <h5 className="card-title">{nombreClase}</h5>
                <p className="card-text">{description}</p>
                <div className="row">
                    <p className="card-text col-6"><small className="text-muted">{`Escrito por ${autor}`}</small></p>
                    <p className="card-text col-6 text-end"><small className="text-muted ">{`Creado el ${creationDate}`}</small></p>
                </div>
                {
                    editar && <input className="react-switch-checkbox" id={`react-switch-new`} type="checkbox" />
                }
            </div>
        </div>
    )

}

export default Comentario;