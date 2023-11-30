//import { ListaComentarios } from "../components/ListaComentarios";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//import data from "../helpers/clases-test.json"
import "./style/VerClases.css";

//import dataComentario from "../helpers/comentarios-test.json"
import { Comentario } from "../components/Comentario";

import { getClase } from '../controller/clase.controller';


export const VerClase = () => {
    const { id } = useParams();
    //const [arrComentario, setarrComentario] = useState(["4487fd8a-a1ae-4cca-8302-de1860224a0c", "489f28fb-779e-4930-9913-6fcb7f0ec7a8"]);
    const [clase, setClase] = useState({
      claseId: '',
      title: 'Test',
      statusClase: false,
      profesorId: '',
      profesorName: '',
      category: '',
      tipoClase: '',
      frecuencia: '',
      description: '',
      price: '',
      imgUrl: 'blackboard.jpg',
      comments: [],
  });
    
/*     useEffect(() => {
        const claseNueva = data.filter(clase => clase.id == id);
        const singleClase = claseNueva[0] || {};
        setClase(singleClase);
        setImageUrl(singleClase.imgUrl);
        setarrComentario(singleClase.commentId)

    }, [id]); */

    useEffect(() => {
      const handleClase = async () => {
        try {
          const res = await getClase(id);
          setClase(res);
          console.log(res)
        } catch (error) {
          console.error('Error al obtener datos del catálogo:', error);
          setClase([]);
        }
      };
  
      handleClase();
    }, []);
  
    console.log('clase', clase);

    return (
        <>
            <div className="ver-clases-container">
                <div className="row d-flex mx-5 my-2 py-5 justify-content-center align-items-start ver-clases-content-1" >
                    <div className="col-lg-6 order-2 order-lg-1">
                        <h2>{clase.title}</h2>
                        <h4>Profesor: <span>{clase.profesorName}</span></h4>
                        <h5>Precio: ${clase.price}</h5>
                        <p>{clase.description}</p>
                        <a href={"contratar/"+id}>
                            <button type="button" className="btn btn-primary btn-lg mt-2">Inscribirse</button>
                        </a>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <div className="card-img-top d-flex justify-content-center align-items-center">
                             {/* <img 
                                src={require(`../assets/${imgUrl}`)} 
                                className="img-fluid"
                                style={{ maxWidth: '100%', height: '20rem', objectFit: 'fill' }} 
                                alt="Imagen representativa de la clase a crear." /> */}
                        </div>
                    </div>
                </div>
                <div className="ver-clases-content-2">
                    {/* <ListaComentarios editar={true} comentarioID={arrComentario} nombreClase={clase.title} /> */}
                    <Comentario
                      nombreClase={clase.title}
                      description="El profesor demuestra un profundo conocimiento del tema y su pasión por enseñar es evidente en cada clase. Siempre está dispuesto a responder preguntas y brindar apoyo adicional cuando los estudiantes lo necesitan. Su estilo de enseñanza hace que el material sea fácil de entender y atractivo para todos en el aula."
                      autor="Franco"
                      creationDate="23/05/2023"
                      editar={false}
                      key="4487fd8a-a1ae-4cca-8302-de1860224a0c"
                  />
                  <Comentario
                      nombreClase={clase.title}
                      description="Este profesor es increíblemente comprometido con el éxito de sus estudiantes. Va más allá de lo esperado para proporcionar recursos adicionales, sesiones de tutoría y retroalimentación constructiva. Sus clases son dinámicas y participativas, lo que hace que aprender sea una experiencia agradable. Realmente es un modelo a seguir en la educación."
                      autor="Iván"
                      creationDate="23/05/2023"
                      editar={false}
                      key="489f28fb-779e-4930-9913-6fcb7f0ec7a8"
                  />
                </div>
            </div >
        </>
    )
}

export default VerClase;