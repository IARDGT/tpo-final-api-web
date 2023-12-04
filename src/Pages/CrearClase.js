import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { uploadClaseImage, createClase } from "../controller/clase.controller";
import "./style/CrearClase.css";
import { useState } from 'react';


// Upload Image to Cloudinary
const uploadImage = async (file, userId) => {
    const data = new FormData();
    data.append("my_img", file);
    data.append("userId", userId);
    let uploadRes = await uploadClaseImage(data);
    console.log("uploadRes", uploadRes);
    return uploadRes;
}

// Update imgUrl in User
const createNewClase = async (req) => {
    let updateRes = await createClase(req);
    console.log("createClase response", updateRes);
    return updateRes;
}



export const CrearClase = () => {
    const { auth, userId } = useAuth();
    const [titulo, setTitulo] = useState(null);
    const [categoria, setCategoria] = useState(null);
    const [tipoClase, setTipoClase] = useState(null);
    const [frecuencia, setFrecuencia] = useState(null);
    const [duracion, setDuracion] = useState(null);
    const [descripcion, setDescripcion] = useState(null);
    const [precio, setPrecio] = useState(null);
    const [imgUrl, setImgUrl] = useState("https://res.cloudinary.com/dtjbknm5h/image/upload/v1701724404/logo_c21cbs.png");
    const [file, setFile] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



    const isSubmitDisabled = () => {
        return (
            titulo &&
            categoria &&
            tipoClase &&
            frecuencia &&
            duracion &&
            descripcion &&
            precio &&
            imgUrl
        );
    };

    const handleImageUpload = (e) => {
        let newImage = e.target.files[0];
        setFile(newImage);
        let url = URL.createObjectURL(newImage);
        setImgUrl(url);
    };



    const handleSubmit = async () => {
        try {
            setLoading(true);

            // Upload Image to Cloudinary
            console.log("VALIDACION OK, SUBIENDO IMAGEN");
            let uploadRes = await uploadImage(file, userId);
            let secureUrl = uploadRes.data.secure_url


            // Create Clase
            let req = {
                title: titulo,
                profesorId: userId,
                category: categoria,
                tipoClase: tipoClase,
                frecuencia: frecuencia,
                duracion: duracion,
                description: descripcion,
                price: precio,
                imgUrl: secureUrl,
            };

            console.log("tu request ES: ", req);
            let createRes = await createNewClase(req);
            console.log("createNewClase", createRes);
            //navigate("/mis-clases/" + userId);
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="crear-clase-container bg-body-tertiary px-5">
                <div className="row d-flex my-2 py-2 justify-content-center align-items-center" >
                    <div className="col-lg-6 justify-content-center order-2 order-lg-1 px-5 px-lg-0">

                        <h2>Crear una clase</h2>
                        <p>
                            Asegúrate de tener un título atractivo, una descripción detallada y un precio justo.
                            No olvides proporcionar material de apoyo, fomentar la interacción con los estudiantes durante la clase, y animarte a recibir feedback.
                            Promociona esta clase en redes sociales y actualiza regularmente tu perfil y la información de la clase para atraer a más estudiantes.
                            ¡Listo para inspirar y enseñar!
                        </p>

                        <form>
                            <h4 className="d-flex mt-4">Datos de la clase:</h4>

                            <div className="form-outline mb-3">
                                <input type="text" id="formNombre" className="form-control form-control-lg"
                                    placeholder="Titulo" onChange={(e) => setTitulo(e.target.value)} />
                            </div>

                            <div className="form-outline mb-3">
                                <input type="text" id="formCategoria" className="form-control form-control-lg"
                                    placeholder="Categoria" onChange={(e) => setCategoria(e.target.value)} />
                            </div>

                            <div className="form-outline mb-3">
                                <select className="form-control form-control-lg" onChange={(e) => setTipoClase(e.target.value)}>
                                    <option defaultValue>Tipo de Clase</option>
                                    <option value="Individual">Individual</option>
                                    <option value="Grupal">Grupal</option>
                                </select>
                            </div>

                            <div className="form-outline mb-3">
                                <select className="form-control form-control-lg" onChange={(e) => setFrecuencia(e.target.value)}>
                                    <option defaultValue>Frecuencia de la clase</option>
                                    <option value="Unica">Unica</option>
                                    <option value="Semanal">Semanal</option>
                                    <option value="Mensual">Mensual</option>
                                </select>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="number" id="formDuracion" className="form-control form-control-lg" min="0"
                                    placeholder="Duracion" onChange={(e) => setDuracion(e.target.value)} />
                            </div>

                            <div className="form-outline mb-3">
                                <input type="number" id="formPrecio" className="form-control form-control-lg"
                                    placeholder="Precio" onChange={(e) => setPrecio(e.target.value)} />
                            </div>

                        </form>
                    </div>
                    <div className="col-lg-6 justify-content-center order-1 order-lg-2">

                        <div className="card mx-4" aria-hidden="true">
                            <div className="card-img-top d-flex justify-content-center align-items-center">
                                <img
                                    id="cardImage"
                                    src={imgUrl}
                                    className="img-fluid img-crear-clase"
                                    alt="Imagen representativa de la clase a crear."
                                />

                            </div>

                            <div className="card-body">
                                <h5 className="card-title">
                                    <span className="col-6">Subir imagen</span>
                                </h5>
                                <div className="card-text text-center">
                                    <p>
                                        ¡Subí una imagen que sirva como una descripción visual de tu clase!
                                    </p>
                                </div>

                                <div className="input-group mb-3">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="form-control"
                                        id="imageUpload"
                                        onChange={(e) => handleImageUpload(e)}
                                        multiple={false} />
                                    <label className="input-group-text" htmlFor="imageUpload"> <FontAwesomeIcon icon={faUpload} /></label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="px-5 px-lg-0 order-3 ">


                        <div className="col-lg-12 form-outline mb-3">
                            <h4 className="d-flex my-3">Descripción de la clase:</h4>
                            <textarea className="form-control form-control-lg" placeholder="Descripción" onChange={(e) => setDescripcion(e.target.value)} />
                        </div>


                        <div className="col-6 d-grid gap-2 d-md-flex justify-content-md-end">
                            <button className="btn btn-primary me-md-2" type="button"
                                disabled={!isSubmitDisabled()}
                                onClick={e => handleSubmit(e)}
                            >Crear Clase</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default CrearClase;