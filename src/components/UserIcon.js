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
        <div className="d-flex flex-row mb-1" id="navbarSupportedContent">

            <Link to='/'>
                <button type="button" className="btn btn-primary">{userName}</button>
            </Link>
            <button
                type="button"
                className="btn btn-outline-primary"
                style={{ marginLeft: 10 + 'px', marginRight: 10 + 'px' }}
                onClick={(e) => handleLogout(e)}
            >Logout</button>
        </div>

    )
}
