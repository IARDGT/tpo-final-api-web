import { useState } from "react";
import { ClaseItem } from "./ClaseItem";


export const ListaClases = ({ cantidad, misClase, urlClase }) => {

    const contenido = [];

    const repetir = (cantidad) => {
        for (let i = 0; i < cantidad; i++) {
            contenido.push(<ClaseItem title="Titulo Clase" name="Nombre y Apellido del Profesor" url="..." imgUrl="..." misClase={ misClase } urlClase={ urlClase } /* key={ clase.id } */ />);
        }
    }

    repetir(cantidad);

    return (
        <>
            {
                !misClase &&
                <div style={{ border: "0px", display: "flex", margin: "15px", flexWrap: "wrap" }}>
                    {contenido}
                </div>
            }
            {
                misClase &&
                <div style={{ border: "0px", margin: "15px", display: "flex", flexWrap: "wrap" }}>
                    {contenido}
                </div>
            }
        </>
    )
}
