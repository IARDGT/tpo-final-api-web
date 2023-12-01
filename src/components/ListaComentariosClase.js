import { ComentarioClase } from "./ComentarioClase";


export const ListaComentariosClase = ({ comments = [], editar }) => {

    const contenido = [];

    function formatISODateToDDMMYYYY(isoDateString) {
        const date = new Date(isoDateString);

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // El mes es indexado desde 0, así que sumamos 1
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    const isoDateString = "2000-01-01T03:00:00.000Z";
    const formattedDate = formatISODateToDDMMYYYY(isoDateString);

    if (!editar) {
        const comentariosFiltrados = comments.filter(comentario => comentario.statusComentario == true);
        comentariosFiltrados.forEach((comentario) => {
            contenido.push(
                <ComentarioClase
                    key={comentario.commentId}
                    commentId={comentario.commentId}
                    description={comentario.comentarioInfo}
                    autor={comentario.autor}
                    creationDate={formatISODateToDDMMYYYY(comentario.createDate)}
                    editar={editar}
                    statusComentario={comentario.statusComentario}
                />
            )
        })
    } else {
        comments.forEach((comentario) => {
            contenido.push(
                <ComentarioClase
                    key={comentario.commentId}
                    commentId={comentario.commentId}
                    description={comentario.comentarioInfo}
                    autor={comentario.autor}
                    creationDate={formatISODateToDDMMYYYY(comentario.createDate)}
                    editar={editar}
                    statusComentario={comentario.statusComentario}
                />
            )
        })
    }


    return (
        <>

            <div style={{ border: "0px", display: "flex", margin: "15px", flexWrap: "wrap" }}>
                {contenido}
            </div>
        </>
    )
}
