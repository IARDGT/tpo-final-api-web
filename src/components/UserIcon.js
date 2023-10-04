import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../components/AuthContext";

export const UserIcon = () => {

    const navigate = useNavigate();
    const { setAuth, user } = useAuth();
    const userName = 'Profe';


    const handleLogout = () => {
        sessionStorage.clear();
        setAuth(false);
        navigate('/');
    }

    return (
       
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <Link to='/'>
                    <button type="button" className="btn btn-primary">{userName}</button>
                </Link>
            </li>
            <li class="nav-item">
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={(e) => handleLogout(e)}
                >Logout</button>
            </li>


        </ul>
    )
}
