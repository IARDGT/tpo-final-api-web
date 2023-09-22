import React from 'react'

export const LogInRegisterBtt = () => {
    return (
        <div className="d-flex flex-row mb-1" id="navbarSupportedContent">
            <button type="button" className="btn btn-outline-primary">Log in</button>
            <button type="button" className="btn btn-primary" style={{ marginLeft: 10 + 'px', marginRight: 10 + 'px' }}>Register</button>
        </div>
    )
}
