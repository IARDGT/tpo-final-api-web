import { ClaseItem } from "./ClaseItem";


export const ListaClases = ({ cantidad }) => {
    
    const repetir = (cantidad) => {
        
        for (let i = 0; i < cantidad; i++) {
            contenido.push(<ClaseItem title="Titulo Clase" name="Nombre y Apellido del Profesor" url="..." imgUrl="..." /* key={ clase.id } */ />);
        }
    }

    const contenido = [];

    repetir(cantidad);

    return (
        <div style={{ border: "0px", display: "flex", margin: "15px", flexWrap: "wrap"}}>
            { contenido }
        </div>
    )
}
