import { MenuBttn } from './MenuBttn';
import { UserIcon } from './UserIcon';
import 'bootstrap/dist/css/bootstrap.min.css'

export const NavbarAuth = () => {

    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img 
                        src={require('../assets/logo.png')} 
                        alt="Logo" 
                        width="30" 
                        height="24" 
                        className="d-inline-block align-text-top"></img>
                </a>
                <button 
                    className="navbar-toggler ms-auto" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarContent" 
                    aria-controls="navbarContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="navbar-collapse collapse" id="navbarContent">
                    <MenuBttn />
                    <UserIcon />
                </div>
            </div>
        </nav>
    );
}