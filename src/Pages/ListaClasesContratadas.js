import { CardClaseContratada } from "../components/CardClaseContratada";
import { Navbar } from "../components/Navbar";

export const ListaClasesContratadas = () => {

    return (
        <>
        <Navbar />
        <div className="container">
            <div className="row justify-content-center">
                <CardClaseContratada />
                <CardClaseContratada />
                <CardClaseContratada />
            </div>
        </div>



        </>
    )
}