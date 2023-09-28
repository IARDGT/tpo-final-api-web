import { ListaClases } from "../components/ListaClases";
import { Navbar } from "../components/Navbar";

export const ListaClasesContratadas = () => {

    return (
        <>
        <Navbar />
        <div className="container" style={{
                    maxWidth: "75%",
                    margin: "auto"
                }}>
            <ListaClases cantidad={3} misClase={ true } urlClase="ver-clase-contratada" />
        </div>



        </>
    )
}