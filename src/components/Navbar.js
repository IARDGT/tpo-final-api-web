import { Link } from 'react-router-dom';
import { LogInRegisterBtt } from './LogInRegisterBttn';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';

export const Navbar = () => {

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
        <Link className="d-flex me-auto p-2 nav-link" to="/catalogo">Catalogo de Clases</Link>
          <LogInRegisterBtt />
        </div>
      </div>
    </nav>
  );
}