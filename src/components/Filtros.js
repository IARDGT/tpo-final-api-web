export const Filtros = ({ categoria }) => {
    return (
        <div className="filtros" >
            <h1>Resultados de: {categoria}</h1>
            <h5>Filtros</h5>
            <div className="filtros-botones">
                <button type="button" className="btn btn-secondary">Nivel</button>
                <button type="button" className="btn btn-secondary">Precio</button>
                <button type="button" className="btn btn-secondary">Tipo de Clase</button>
                <button type="button" className="btn btn-primary">Aplicar Filtros</button>
            </div>
        </div>
    )
}
