import { Filtros } from "../components/Filtros"
import { ListaClases } from "../components/ListaClases"


import "./style/Catalogo.css";

export const Catalogo = () => {
    return (
        <>
            <div className="catalago-container">
                <Filtros categoria={ "Matemáticas" } />
                <ListaClases cantidad={16} urlClase="ver-clase" />
            </div>
        </>
    )
}
