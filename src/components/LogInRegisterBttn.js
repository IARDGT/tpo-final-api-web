import React from 'react'
import { Link } from "react-router-dom";

export const LogInRegisterBtt = () => {
    return (



        <div className="d-flex flex-row mb-1" id="navbarContent">

            <Link to='/login'>
                <button type="button" className="btn btn-outline-primary">Log in</button> 
            </Link>
            <Link to='/register'>
                <button type="button" className="btn btn-primary" style={{ marginLeft: 10 + 'px', marginRight: 10 + 'px' }}>Register</button>
            </Link>

        </div>
    )
}
