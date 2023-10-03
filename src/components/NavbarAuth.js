import { MenuBttn } from './MenuBttn';
import { UserIcon } from './UserIcon';
import 'bootstrap/dist/css/bootstrap.min.css'

export const NavbarAuth = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={require('../assets/logo.png')} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"></img>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <MenuBttn />
                    <UserIcon />
                </div>
            </div>
        </nav>
    );
}