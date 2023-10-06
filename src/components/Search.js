import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    let navigate = useNavigate();

    const routeChange = (value) => {
        /* logica del buscador */
        const path = value? `catalogo/${value}` : `catalogo/todo`;
        navigate(path);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().lenght <= 1) return;

        routeChange( inputValue.trim() );
    }

    return (
        <form onSubmit={onSubmit} className="d-flex me-auto p-2" role="search">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={ inputValue }
                onChange={ onInputChange }
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>


    )
}
