import { ClaseItem } from "./ClaseItem";

const normalizeCategoria = (categoria) => {
    return categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '-');
  };


export const ListaClases = ({ cantidadMax, misClase, urlClase, listaCatalogo, onCategoriaChange, onTipoClaseChange, onFrecuenciaChange, onCalificacionChange, filtros }) => {

    const contenido = [];


    const clasesFiltradas = listaCatalogo.filter((clase) => {
      const filtroCalificacion = parseFloat(filtros.calificacion);
      const claseCalificacion = parseFloat(clase.calificacion);
      return (
        (!filtros.categoria || normalizeCategoria(clase.category) === filtros.categoria) &&
        (!filtros.tipoClase || clase.tipoClase === filtros.tipoClase) &&
        (!filtros.frecuencia || clase.frecuencia === filtros.frecuencia) &&
        (isNaN(filtroCalificacion) || isNaN(claseCalificacion) || claseCalificacion === filtroCalificacion)
      );
    });

    clasesFiltradas.slice(0, cantidadMax).forEach((clase) => {
        contenido.push(
          <ClaseItem
            title={clase.title}
            profesorName={clase.profesorName}
            category={clase.category}
            calificacion={clase.calificacion}
            price={clase.price}
            commentId={clase.commentId}
            url="..."
            imgUrl={clase.imgUrl}
            urlClase={urlClase + '/' + clase.claseId}
            key={clase.claseId}
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
