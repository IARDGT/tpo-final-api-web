import { Link } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

export const MenuBttn = () => {
    const { userId } = useAuth();

    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/catalogo">Catalogo de Clases</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={`/mis-clases/${userId}`}>Mis Clases</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/mis-clases-contratadas">Clases Contratadas</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/crear-clase">Crear Clase</Link>
            </li>
        </ul>
    )
}
