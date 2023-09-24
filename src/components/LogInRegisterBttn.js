import React from 'react'

export const LogInRegisterBtt = () => {
    return (
        <div className="d-flex flex-row mb-1" id="navbarSupportedContent">
            <a href="/login"> 
                <button type="button" className="btn btn-outline-primary">Log in</button> 
            </a>
            <a href="/register"> 
                <button type="button" className="btn btn-primary" style={{ marginLeft: 10 + 'px', marginRight: 10 + 'px' }}>Register</button>
            </a>

        </div>
    )
}
