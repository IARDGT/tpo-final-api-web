import { ListaClases } from "../components/ListaClases";
import { Navbar } from "../components/Navbar";

import "./style/ListaClasesProfesor.css";

export const ListaClasesContratadas = () => {

    return (
        <>
            <Navbar />
            <div className="lista-clases-profesor-container">
                <ListaClases cantidad={3} misClase={true} urlClase="ver-clase-contratada" />
            </div>
        </>
    )
}