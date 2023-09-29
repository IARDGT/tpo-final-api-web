import { ListaClases } from "../components/ListaClases";
import { Navbar } from "../components/Navbar";

import "./style/ListaClasesProfesor.css";

export const ListaClasesProfesor = () => {

    return (
        <>
            <Navbar />
            <div className="lista-clases-profesor-conteiner">
                <ListaClases cantidad={7} misClase={ true } urlClase="ver-clase" />
            </div>
        </>
    )
}