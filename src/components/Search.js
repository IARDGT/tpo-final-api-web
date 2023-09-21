import { useNavigate } from "react-router-dom";

export const Search = () => {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `catalogo`;
        navigate(path);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        routeChange()
    }

    return (
        <form onSubmit={onSubmit} className="d-flex me-auto p-2" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}
