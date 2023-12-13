
export const Comentario = ({ commentId, nombreClase, description, autor, creationDate, editar, statusComentario, numero }) => {

    return (
        <div className={`box box${numero}`}>
        <div className="card mx-5 my-2 px-3 comentario">
            <div className="card-body">
                <h5 className="card-title">{nombreClase}</h5>
                <p className="card-text">{description}</p>
                <div className="row">
                    <p className="card-text col-6"><small className="text-muted">{`Escrito por ${autor}`}</small></p>
                    <p className="card-text col-6 text-end"><small className="text-muted">{`Creado el ${creationDate}`}</small></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Comentario;