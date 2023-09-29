

export const Comentario = ({editar}) => {

    

    return (
        <div className="card mx-5 my-2 px-3">
            <div className="card-body">
                <h5 className="card-title">Comentario ejemplo</h5>
                <p className="card-text">Este es un comentario a modo de ejemplo. El alumno debe llenar un comentario sobre la clase para que pueda figurar en esta pagina.</p>
                <div className="row">
                    <p className="card-text col-6"><small className="text-muted">Escrito por Franco Rébora</small></p>
                    <p className="card-text col-6 text-end"><small className="text-muted ">Última actualización hace 3 minutos</small></p>
                </div>
                {
                    
                    editar && <input className="react-switch-checkbox" id={`react-switch-new`} type="checkbox" />
                }
            </div>
        </div>
    )

}

export default Comentario;