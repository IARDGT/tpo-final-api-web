import { ClaseItem } from "./ClaseItem";
import data from "../helpers/clases-test.json"


export const ListaClases = ({ cantidadMax, misClase, urlClase }) => {

    const contenido = [];

    const repetir = () => {
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

    repetir();

    return (
        <>
            <div style={{ border: "0px", display: "flex", margin: "15px", flexWrap: "wrap" }}>
                {contenido.slice(0, cantidadMax)}
            </div>
        </>
    )
}
