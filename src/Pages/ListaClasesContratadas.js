import { ListaClases2 } from "../components/ListaClases2";

import "./style/ListaClasesProfesor.css";

export const ListaClasesContratadas = () => {

    return (
        <>
            <div className="lista-clases-profesor-container">
                <ListaClases2 cantidadMax={3} misClase={true} urlClase="ver-clase-contratada" />
            </div>
        </>
    )
}