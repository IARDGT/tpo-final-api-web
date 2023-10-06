import { Comentario } from "./Comentario";
import dataComentario from "../helpers/comentarios-test.json"


export const ListaComentarios = ({ comentarioID = ["4487fd8a-a1ae-4cca-8302-de1860224a0c", "489f28fb-779e-4930-9913-6fcb7f0ec7a8"], editar, nombreClase }) => {

    const contenido = [];
    const arrDeafult = ["4487fd8a-a1ae-4cca-8302-de1860224a0c", "489f28fb-779e-4930-9913-6fcb7f0ec7a8"];

    const comentariosFiltrados = dataComentario.filter(comentario => comentarioID.includes(comentario.id));

    const sonArraysIguales = (array1, array2) => {
        if (array1.length !== array2.length) {
          return false;
        }
        return array1.every((element, index) => element === array2[index]);
      }

    if (sonArraysIguales(comentarioID, arrDeafult)) {
        arrDeafult.map((comentario) => {
            console.log("Entro")
            contenido.push(
                <Comentario
                    nombreClase={nombreClase}
                    description={comentario.description}
                    autor={comentario.autor}
                    creationDate={comentario.creationDate}
                    editar={false}
                    
                />
            );
        });
      } else {
          comentariosFiltrados.map((comentario) => {
              console.log("Entro")
              contenido.push(
                  <Comentario
                      nombreClase={nombreClase}
                      description={comentario.description}
                      autor={comentario.autor}
                      creationDate={comentario.creationDate}
                      editar={false}
                      
                  />
              );
          });
      }



    console.log("contenido", contenido)


    return (
        <>

            <div style={{ border: "0px", display: "flex", margin: "15px", flexWrap: "wrap" }}>
                {contenido}
            </div>
        </>
    )
}
