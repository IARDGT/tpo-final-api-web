import { useState } from 'react';

export const Comentario = () => {

    const [auth, setAuth] = useState(true);

    return (
        <div class="card mx-5 my-2 px-3">
            <div class="card-body">
                <h5 class="card-title">Comentario ejemplo</h5>
                <p class="card-text">Este es un comentario a modo de ejemplo. El alumno debe llenar un comentario sobre la clase para que pueda figurar en esta pagina.</p>
                <div class="row">
                    <p class="card-text col-6"><small class="text-muted">Escrito por Franco Rébora</small></p>
                    <p class="card-text col-6 text-end"><small class="text-muted ">Última actualización hace 3 minutos</small></p>
                </div>
                {
                    
                    auth && <input className="react-switch-checkbox" id={`react-switch-new`} type="checkbox" />
                }
            </div>
        </div>
    )

}

export default Comentario;