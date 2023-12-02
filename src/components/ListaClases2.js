import { ClaseItemContratada } from "./ClaseItemContratada";
import data from "../helpers/clases-test.json"

const normalizeCategoria = (categoria, id) => {
    return categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '-');
  };


export const ListaClases2 = ({ listaClases, misClase, urlClase, listaCatalogo  }) => {

  const contenido = [];

  console.log('listaclase2')

  listaClases.forEach((clase) => {
      contenido.push(
        <ClaseItemContratada
          title={clase.title}
          profesorName={clase.profesorName}
          category={clase.category}
          tipoClase={clase.tipoClase}
          frecuencia={clase.frecuencia}
          price={clase.price}
          url="..."
          imgUrl={clase.imgUrl}
          urlClase={urlClase + '/' + clase.claseContratadaId}
          key={clase.claseContratadaId}
          //misClase={misClase}
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
