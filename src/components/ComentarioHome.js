import { useState } from 'react';

import { updateStatusComentario } from '../controller/clase.controller';

export const ComentarioHome = ({ commentId, nombreClase, description, autor, creationDate, editar, statusComentario }) => {
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
                        <label className="react-switch" htmlFor={`react-switch-new`}>
                            <input
                                className="react-switch-checkbox"
                                id={`react-switch-new`}
                                type="checkbox"
                                checked={toggleState}
                                onChange={handleToggleChange}
                            />
                            <span className={`react-switch-label ${toggleState ? 'react-switch-label-on' : 'react-switch-label-off'}`}>
                                <span className={`react-switch-button`} />
                            </span>
                        </label>
                        <p>{toggleState ? 'Toggle activado' : 'Toggle desactivado'}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ComentarioHome;
