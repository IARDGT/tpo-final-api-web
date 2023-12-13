import { useState, useEffect } from 'react';

import { Comentario } from "./Comentario";

import { listaComentariosGet } from '../controller/clase.controller';

function formatISODateToDDMMYYYY(isoDateString) {
    const date = new Date(isoDateString);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // El mes es indexado desde 0, así que sumamos 1
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

export const ListaComentarios = () => {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const handleComentario = async () => {
          try {
            const res = await listaComentariosGet();
            
            setDatos(res);
          } catch (error) {
            console.error('Error al obtener datos del catálogo:', error);
            setDatos([]);
          }
        };
    
        handleComentario();
      }, []);

      const comentariosLimitados = datos.slice(0, 4);

      const contenido = comentariosLimitados.map((comentario, index) => (
        <Comentario
          key={comentario.commentId}
          commentId={comentario.commentId}
          description={comentario.comentarioInfo}
          autor={comentario.autor}
          creationDate={formatISODateToDDMMYYYY(comentario.createDate)}
          editar={false}
          statusComentario={comentario.statusComentario}
          numero={index + 1} // El índice comienza en 0, así que sumamos 1
        />
      ));


    console.log("contenido", contenido)


    return (
        <>
<div className="grid2x2" style={{ border: "0px", display: "flex", margin: "15px", flexWrap: "wrap" }}>
                {contenido}
           
            </div>
        </>
    )
}
