import { Comentario } from "../components/Comentario";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import data from "../helpers/clases-test.json"
import "./style/VerClases.css";


export const VerClase = () => {
    const { id } = useParams();
    const [clase, setClase] = useState({});
    const [imageUrl, setImageUrl] = useState('blackboard.jpg');
    
    useEffect(() => {
        const claseNueva = data.filter(clase => clase.id == id);
        const singleClase = claseNueva[0] || {};
        setClase(singleClase);
        setImageUrl(singleClase.imgUrl);
    }, [id]);
    
    
    /*
    const comentarios = [];
    const renderComentarios = () => {
        {
            clase.comentarios.map(id => {
                comentarios.push(<Comentario key={id}/>)
            })
        }
    }
    */

    return (
        <>
            <div className="ver-clases-container">
                <div className="row d-flex mx-5 my-2 py-5 justify-content-center align-items-start ver-clases-content-1" >
                    <div className="col-lg-6 order-2 order-lg-1">
                        <h2>{clase.title}</h2>
                        <h4>Profe: <span>{clase.profesorName}</span></h4>
                        <h5>Precio: ${clase.price}</h5>
                        <p>{clase.description}</p>
                        <a href={"contratar/"+id}>
                            <button type="button" className="btn btn-primary btn-lg mt-2">Inscribirse</button>
                        </a>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <div className="card-img-top d-flex justify-content-center align-items-center">
                            <img 
                                src={require('../assets/'+imageUrl)} 
                                className="img-fluid"
                                style={{ maxWidth: '100%', height: '20rem', objectFit: 'fill' }} 
                                alt="Imagen representativa de la clase a crear." />
                        </div>
                    </div>
                </div>
                <div className="ver-clases-content-2">
                    <Comentario editar={true} />
                    <Comentario editar={true} />
                    <Comentario editar={true} />
                </div>
            </div >
        </>
    )
}

export default VerClase;