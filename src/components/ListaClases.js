import { ClaseItem } from "./ClaseItem";
import dataTest from "../helpers/clases-test.json"

const normalizeCategoria = (categoria) => {
    return categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '-');
  };


export const ListaClases = ({ cantidadMax, misClase, urlClase, listaCatalogo, onCategoriaChange, onTipoClaseChange, onFrecuenciaChange, onCalificacionChange, filtros }) => {

    const contenido = [];


    const clasesFiltradas = listaCatalogo.filter((clase) => {
      return (
        (!filtros.categoria || normalizeCategoria(clase.category) === filtros.categoria) &&
        (!filtros.tipoClase || clase.tipoClase === filtros.tipoClase) &&
        (!filtros.frecuencia || clase.frecuencia === filtros.frecuencia) &&
        (!filtros.calificacion || clase.calificacion === filtros.calificacion)
        // Agrega más condiciones para otros filtros
      );
    });

    clasesFiltradas.slice(0, cantidadMax).forEach((clase) => {
        contenido.push(
          <ClaseItem
            title={clase.title}
            profesorName={clase.profesorName}
            category={clase.category}
            price={clase.price}
            commentId={clase.commentId}
            url="..."
            imgUrl={clase.imgUrl}
            urlClase={urlClase + '/' + clase._id}
            key={clase._id}
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
