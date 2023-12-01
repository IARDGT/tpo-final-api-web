import { ClaseItem } from "./ClaseItem";



export const ListaMisClases = ({ cantidadMax, listaClases, misClase, urlClase, listaCatalogo  }) => {

    const contenido = [];

    listaClases.slice(0, cantidadMax).forEach((clase) => {
        contenido.push(
          <ClaseItem
            title={clase.title}
            profesorName={clase.profesorName}
            category={clase.category}
            calificacion={clase.calificacion}
            tipoClase={clase.tipoClase}
            frecuencia={clase.frecuencia}
            price={clase.price}
            commentId={clase.commentId}
            url="..."
            imgUrl={clase.imgUrl}
            urlClase={urlClase + '/' + clase.claseId}
            key={clase.claseId}
            misClase={misClase}
          />
        );
      });

    return (
        <>
            <div style={{ border: "0px", display: "flex", margin: "15px", flexWrap: "wrap" }}>
                {contenido}
            </div>
        </>
    )
}
