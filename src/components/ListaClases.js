import { ClaseItem } from "./ClaseItem";
import data from "../helpers/clases-test.json"

const normalizeCategoria = (categoria, id) => {
    return categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '-');
  };


export const ListaClases = ({ cantidadMax, misClase, urlClase, categoria }) => {

    const contenido = [];

    const clasesFiltradas = categoria && categoria !== "todo"
  ? data.filter((clase) => normalizeCategoria(clase.category) === categoria)
  : data;

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
            urlClase={urlClase + '/' + clase.id}
            key={clase.id}
          />
        );
      });

/*     const repetir = () => {
        {
            data.map(clase => {
                contenido.push(<ClaseItem
                    title={clase.title}
                    profesorName={clase.profesorName}
                    category={clase.category}
                    price={clase.price}
                    commentId={clase.commentId}
                    url="..."
                    imgUrl="..."
                    misClase={misClase}
                    urlClase={urlClase + '/' + clase.id}
                    key={clase.id}
                />
                )
            })
        }
    }

    repetir(); */

    return (
        <>
            <div style={{ border: "0px", display: "flex", margin: "15px", flexWrap: "wrap" }}>
                {contenido}
            </div>
        </>
    )
}
