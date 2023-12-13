import { ClaseItemContratada } from "./ClaseItemContratada";

export const ListaClases2 = ({ listaClases, urlClase, actualizarEstado }) => {

  const contenido = [];

  listaClases.forEach((clase) => {
      contenido.push(
        <ClaseItemContratada
          urlClase={urlClase + '/' + clase.claseContratadaId}
          key={clase.claseContratadaId}
          clase={clase}
          actualizarEstado={actualizarEstado}
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
