import { ClaseItemContratada } from "./ClaseItemContratada";

export const ListaClasesContratadas = ({ listaClases, urlClase }) => {

  const contenido = [];

  listaClases.forEach((clase) => {
      contenido.push(
        <ClaseItemContratada
          urlClase={urlClase + '/' + clase.claseContratadaId}
          key={clase.claseContratadaId}
          clase={clase}
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
