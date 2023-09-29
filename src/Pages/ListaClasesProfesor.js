import { ListaClases } from "../components/ListaClases";

import "./style/ListaClasesProfesor.css";

export const ListaClasesProfesor = () => {

    return (
        <>
            <div className="lista-clases-profesor-container">
                <ListaClases cantidad={7} misClase={ true } urlClase="ver-clase" />
            </div>
        </>
    )
}