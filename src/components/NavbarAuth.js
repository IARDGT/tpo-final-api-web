import { useState, useEffect } from 'react';
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
                <MenuBttn />
                <UserIcon />
            </div>
        </nav>
    );
}