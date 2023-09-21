import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Search } from './Search';


export default function Navbar() {

  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={require('../assets/logo.png')} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"></img>
        </a>
        {
          !auth && <Search />
        }
        <div className="d-flex flex-row mb-1" id="navbarSupportedContent">
          <button type="button" className="btn btn-outline-primary">Log in</button>
          <button type="button" className="btn btn-primary" style={{ marginLeft: 10 + 'px', marginRight: 10 + 'px' }}>Register</button>
        </div>
      </div>
    </nav>
  );
}