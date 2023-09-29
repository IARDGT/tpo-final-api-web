import { ListaClases } from "../components/ListaClases";

import "./style/ListaClasesProfesor.css";

export const ListaClasesContratadas = () => {

    return (
        <>
            <div className="lista-clases-profesor-container">
                <ListaClases cantidad={3} misClase={true} urlClase="ver-clase-contratada" />
            </div>
        </>
    )
}