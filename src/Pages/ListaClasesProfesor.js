import { ListaClases } from "../components/ListaClases";
import { Navbar } from "../components/Navbar";

export const ListaClasesProfesor = () => {

    return (
        <>
            <Navbar />
            <div
                style={{
                    maxWidth: "75%",
                    margin: "auto"
                }}>
                <ListaClases cantidad={7} misClase={ true } urlClase="ver-clase" />
            </div>
        </>
    )
}