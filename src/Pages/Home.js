import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Search } from "../components/Search";



export const Home = () => {
    return (
        <>
            <Navbar />
            <div>
                <h1>Encuentra tu clase ideal,
                    con tu profesor ideal.</h1>
                <Search />
            </div>
            <div>
                <h2>Pasos para iniciar tus clases</h2>
                

            </div>
            <h1>Home</h1>
            <Footer />
        </>
    )
}