import { Filtros } from "../components/Filtros"
import { ListaClases } from "../components/ListaClases"
import { Navbar } from "../components/Navbar"

import "./style/Catalogo.css";

export const Catalogo = () => {
    return (
        <>
            <Navbar />
            <div
                style={{
                    maxWidth: "75%",
                    margin: "auto"
                }}>
                <Filtros categoria={ "Matemáticas" } />
                <ListaClases cantidad={16} urlClase="ver-clase" />
            </div>
        </>
    )
}
