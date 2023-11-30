import data from "../helpers/clases-test.json"

const normalizeCategoria = (categoria) => {
    return categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '-');
  };

export const Filtros = ({ categoria }) => {

    const contenido = [];

    const repetir = () => {

        const arrCategory = [];

        let keyNbr = 1;

        data.map(clase => {
            const categoryStr = normalizeCategoria(clase.category);

            const element = (<li key={keyNbr} ><a className="dropdown-item" href={`/catalogo/${categoryStr}`}>{clase.category}</a></li>);

            if (!arrCategory.includes(categoryStr)) {
                contenido.push(element);
                arrCategory.push(categoryStr);
                keyNbr++;
            }
        })
    }

    repetir();

    return (
        <div className="filtros" >
            <h1>Resultados de: {categoria}</h1>
            <h5>Filtros</h5>
            <div className="filtros-botones">
                <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Categoria
                    </button>
                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Tipo de clase
                    </button>
                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Frecuencia
                    </button>
                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Calificación
                    </button>
                    <ul className="dropdown-menu">
                        {contenido}
                    </ul>
                </div>
                {/* <button type="button" className="btn btn-secondary">Nivel</button>
                <button type="button" className="btn btn-secondary">Precio</button>
                <button type="button" className="btn btn-secondary">Tipo de Clase</button>
                <button type="button" className="btn btn-primary">Aplicar Filtros</button> */}
            </div>



        </div>
    )
}


