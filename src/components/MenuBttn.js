import { Link } from 'react-router-dom';

export const MenuBttn = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/catalogo">Catalogo de Clases</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/mis-clases">Mis Clases</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/lista-clases-contratada">Clases Contratadas</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/crear-clase">Crear Clase</Link>
            </li>
        </ul>
    )
}
