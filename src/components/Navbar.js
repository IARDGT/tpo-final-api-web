import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Search } from './Search';
import { LogInRegisterBtt } from './LogInRegisterBttn';
import { MenuBttn } from './MenuBttn';
import { UserIcon } from './UserIcon';

export const Navbar = () => {

  const [auth, setAuth] = useState(false);



  /*   const [anchorEl, setAnchorEl] = useState(null);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    }; */

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={require('../assets/logo.png')} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"></img>
        </a>
        {
          !auth && <Search />
        }
        {
          auth && <MenuBttn />
        }
        {
          !auth && <LogInRegisterBtt />
        }
        {
          auth && <UserIcon />
        }
      </div>
    </nav>
  );
}