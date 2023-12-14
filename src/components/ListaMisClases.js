import { ClaseItem } from "./ClaseItem";



export const ListaMisClases = ({ cantidadMax, listaClases, misClase, urlClase, listaCatalogo  }) => {

    const contenido = [];

    listaClases.forEach((clase) => {
        contenido.push(
          <ClaseItem
            clase={clase}
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
