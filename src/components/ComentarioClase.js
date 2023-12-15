import { useState } from 'react';

import { updateStatusComentario } from '../controller/clase.controller';

export const ComentarioClase = ({ commentId, nombreClase, description, autor, creationDate, editar, statusComentario }) => {
    const [toggleState, setToggleState] = useState(statusComentario);

    const handleToggleChange = async () => {
        setToggleState(!toggleState);
        // Puedes agregar más lógica aquí si es necesario
        await updateStatusComentario( commentId, toggleState );
    };

    return (
        <div className="card mx-5 my-2 px-3 comentario">
            <div className="card-body">
                <h5 className="card-title">{nombreClase}</h5>
                <p className="card-text">{description}</p>
                <div className="row">
                    <p className="card-text col-6"><small className="text-muted">{`Escrito por ${autor}`}</small></p>
                    <p className="card-text col-6 text-end"><small className="text-muted">{`Creado el ${creationDate}`}</small></p>
                </div>
                {editar && (
                    <div>
                        <div class="form-check form-switch">
                            <input 
                                className="form-check-input"
                                id="flexSwitchCheckDefault"
                                type="checkbox"
                                checked={toggleState}
                                onChange={handleToggleChange}
                            />
                            <label class="form-check-label" for="flexSwitchCheckDefault">{toggleState ? 'Comentario activado' : 'Comentario desactivado'}</label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ComentarioClase;
