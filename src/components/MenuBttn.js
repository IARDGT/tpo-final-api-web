export const MenuBttn = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link " aria-current="page" href="catalogo">Catalogo de Clases</a>
            </li>
            <li className="nav-item">
                <a className="nav-link " href="mis-clases">Mis Clases</a>
            </li>
            <li className="nav-item">
                <a className="nav-link " href="lista-clases-contratada">Clases Contratadas</a>
            </li>
            <li className="nav-item">
                <a className="nav-link " href="crear-clase">Crear Clase</a>
            </li>
        </ul>
    )
}
