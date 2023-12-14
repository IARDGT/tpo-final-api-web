import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style/ContratarClase.css';

import { getClase } from '../controller/clase.controller';
import { contratarClase } from '../controller/claseContratada.controller';


function esCorreoElectronicoValido(email) {
    const regexCorreoElectronico = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexCorreoElectronico.test(email);
}

const ModalEmail = ({ onClose }) => (
    <div className="modal">
      <div className="modal-content">
        <p>El correo electrónico no es válido.</p>
        <button className="modal-contratar-clase" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );



export const ContratarClase = () => {

    const { id } = useParams();

    const [clase, setClase] = useState({
        claseId: '',
        title: '',
        statusClase: false,
        profesorId: '',
        profesorName: '',
        category: '',
        tipoClase: '',
        frecuencia: '',
        description: '',
        price: '',
        imgUrl: 'https://res.cloudinary.com/dtjbknm5h/image/upload/v1701724404/logo_c21cbs.png',
        comments: [],
        calificacion: 0,
    });

    const [formNombre, setFormNombre] = useState(null);
    const [formApellido, setFormApellido] = useState(null);
    const [formTelefono, setFormTelefono] = useState('');
    const [formEmail, setFormEmail] = useState(null);
    const [formHorario, setFormHorario] = useState(null);
    const [formDescripcion, setFormDescripcion] = useState(null);
    const [aceptarTerminos, setAceptarTerminos] = useState(false);
    const [mostrarModalEmail, setMostrarModalEmail] = useState(false);
    const [mostrarModalInscripcion, setMostrarModalInscripcion] = useState(false);

    const isSubmitDisabled = () => {
        return (
            formNombre &&
            formApellido &&
            formTelefono &&
            formEmail &&
            formHorario &&
            formDescripcion &&
            aceptarTerminos
        );
    };


    useEffect(() => {
        const handleClase = async () => {
            try {
                const res = await getClase(id);
                setClase(res);
                console.log('res---->', res);
            } catch (error) {
                console.error('Error al obtener datos del catálogo:', error);
                setClase({});
            }
        };

        handleClase();
    }, [id]);

    const defaultImage = "https://res.cloudinary.com/dtjbknm5h/image/upload/v1701724404/logo_c21cbs.png";

    const onImageError = (error) => {
        console.log("ERROR WHILE LOADING IMG...");
        error.target.src = defaultImage;
    }

    const handleSubmit = async() => {
        
        if (!esCorreoElectronicoValido(formEmail)) {
            console.log('El email no es valido', formEmail);
            setMostrarModalEmail(true);
            return;
        } 
        const req = {
            formNombre,
            formApellido,
            formTelefono,
            formEmail,
            formHorario,
            formDescripcion,
            claseId: clase.claseId
        }
        console.log('Datos clase:', clase);
        const response = await contratarClase(req);
        if (response.ok) {
            console.log('salio bien')
            setMostrarModalInscripcion(true);
        }
    };

    const ModalInscripcion = ({ onClose }) => (
        <div className="modal">
          <div className="modal-content">
            <p>Su inscripción a {clase.title} ha sido exitosa, se le notificará al profesor. Por favor, espere a que este confirme su clase.</p>
            <Link className="btn btn-primary modal-contratar-clase"  to="/catalogo">Cerrar</Link>
            
          </div>
        </div>
      );

    return (
        <>
            <div className="contratar-clase-container">
                <div className="row d-flex mx-2 my-2 justify-content-center align-items-center" >
                    <div className="col-lg-7">
                        <h2>{clase.title}</h2>
                        <h4>Profe: <span>{clase.profesorName}</span></h4>
                        <h5>Precio: ${clase.price}</h5>
                        <p>{clase.description}</p>
                    </div>
                    <div className="col-lg-5 justify-content-center">
                        <div className="card-img-top d-flex justify-content-center align-items-center">
                            <img
                                id="cardImage"
                                src={clase.imgUrl}
                                className="img-fluid"
                                style={{ maxWidth: '100%', height: '20rem', objectFit: 'cover' }}
                                alt="Imagen representativa de la clase a contratar."
                                onError={e => onImageError(e)}
                            />

                        </div>
                    </div>
                </div>
                <div className="row d-flex mx-2 my-2 py-2 justify-content-center align-items-center">
                    <div>
                        <form>
                            <h3 className="d-flex mt-4">Datos del alumno:</h3>

                            <div className="form-outline mb-3">
                                <input type="text"
                                    id="formNombre"
                                    className="form-control form-control-lg"
                                    placeholder="Nombre"
                                    onChange={(e) => setFormNombre(e.target.value)} />
                            </div>

                            <div className="form-outline mb-3">
                                <input type="text"
                                    id="formApellido"
                                    className="form-control form-control-lg"
                                    placeholder="Apellido"
                                    onChange={(e) => setFormApellido(e.target.value)} />
                            </div>

                            <div className="form-outline mb-3">
                                <input
                                    type="text"
                                    id="formTelefono"
                                    className="form-control form-control-lg"
                                    placeholder="Telefono"
                                    value={formTelefono}
                                    onChange={(e) => {
                                        // Filtrar la entrada para permitir solo números
                                        const numericValue = e.target.value.replace(/\D/g, '');
                                        setFormTelefono(numericValue);
                                    }}
                                />


                            </div>

                            <div className="form-outline mb-3">
                                <input
                                    type="email"
                                    id="formEmail"
                                    className="form-control form-control-lg"
                                    placeholder="Email"
                                    onChange={(e) => setFormEmail(e.target.value)}
                                />

                            </div>

                            <div className="form-outline mb-3">
                                <input type="text"
                                    id="formHorario"
                                    className="form-control form-control-lg"
                                    placeholder="Horario"
                                    onChange={(e) => setFormHorario(e.target.value)} />
                            </div>
                            <textarea className="form-control form-control-lg mb-3"
                                placeholder="Comentario"
                                onChange={(e) => setFormDescripcion(e.target.value)}></textarea>

                            <div className="form-check">
                                <input className="form-check-input"
                                    type="checkbox"
                                    id="aceptarTerminos"
                                    checked={aceptarTerminos}
                                    onChange={() => setAceptarTerminos(!aceptarTerminos)} />
                                <label className="form-check-label"
                                    htmlFor="flexCheckDefault">
                                    Aceptar términos y condiciones
                                </label>
                            </div>
                            <button type="button"
                                className="btn btn-primary btn-lg mt-3"
                                onClick={() => handleSubmit()}
                                disabled={!isSubmitDisabled()}>Contratar Clase</button>
                        </form>
                    </div>

                </div>
            </div>
            {mostrarModalEmail && <ModalEmail onClose={() => setMostrarModalEmail(false)} />}
            {mostrarModalInscripcion && <ModalInscripcion onClose={() => setMostrarModalInscripcion(false)} />}
        </>
    )
}

export default ContratarClase;