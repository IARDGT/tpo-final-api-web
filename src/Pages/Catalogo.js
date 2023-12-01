import { useState, useEffect } from 'react';
import { ListaClases } from '../components/ListaClases';
import "./style/Catalogo.css";
import { getCatalogo } from '../controller/clase.controller';

const normalizeCategoria = (categoria) => {
  return categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '-');
};

export const Catalogo = () => {
  const [datos, setDatos] = useState([]);
  const [filtros, setFiltros] = useState({
    categoria: '',
    tipoClase: '',
    frecuencia: '',
    calificacion: '',

  });

  const handleCategoriaChange = (categoria) => {
    setFiltros({ ...filtros, categoria });
  };

  const handleTipoClaseChange = (tipoClase) => {
    setFiltros({ ...filtros, tipoClase });
  };

  const handleFrecuenciaChange = (frecuencia) => {
    setFiltros({ ...filtros, frecuencia });
  };

  const handleCalificacionChange = (calificacion) => {
    setFiltros({ ...filtros, calificacion });
  };

  useEffect(() => {
    const handleCatalogo = async () => {
      try {
        const res = await getCatalogo();
        setDatos(res);
      } catch (error) {
        console.error('Error al obtener datos del catálogo:', error);
        setDatos([]);
      }
    };

    handleCatalogo();
  }, []);

  const categoriasUnicas = Array.from(new Set(datos.map(clase => clase.category)));
  const tipoClase = Array.from(new Set(datos.map(clase => clase.tipoClase)));
  const frecuencia = Array.from(new Set(datos.map(clase => clase.frecuencia)));
  const calificacion = Array.from(new Set(datos.map(clase => clase.calificacion)));

  console.log('datos',datos)

  return (
    <>
      <div className="catalago-container">
        <select className="form-select" aria-label="Default select example" onChange={(e) => handleCategoriaChange(e.target.value)}>
          <option value="">Categorías</option>
          {categoriasUnicas.map((categoriaUnica) => (
            <option key={categoriaUnica} value={normalizeCategoria(categoriaUnica)}>
              {categoriaUnica}
            </option>
          ))}
        </select>
        <select className="form-select" aria-label="Default select example" onChange={(e) => handleTipoClaseChange(e.target.value)}>
          <option value="">Tipos de Clase</option>
          {tipoClase.map((tipoClase) => (
            <option key={tipoClase} value={normalizeCategoria(tipoClase)}>
              {tipoClase}
            </option>
          ))}
        </select>
        <select className="form-select" aria-label="Default select example" onChange={(e) => handleFrecuenciaChange(e.target.value)}>
          <option value="">Frecuencias</option>
          {frecuencia.map((frecuencia) => (
            <option key={frecuencia} value={normalizeCategoria(frecuencia)}>
              {frecuencia}
            </option>
          ))}
        </select>
        <select className="form-select" aria-label="Default select example" onChange={(e) => handleCalificacionChange(e.target.value)}>
          <option value="">Calificacion</option>
          {calificacion.map((calificacion) => (
            <option key={calificacion} value={calificacion}>
              {calificacion}
            </option>
          ))}
        </select>
        <ListaClases cantidadMax={30}
          urlClase="/ver-clase"
          listaCatalogo={datos}
          onCategoriaChange={handleCategoriaChange}
          onTipoClaseChange={handleTipoClaseChange}
          onFrecuenciaChange={handleFrecuenciaChange}
          onCalificacionChange={handleCalificacionChange}
          filtros={filtros} />
      </div>
    </>
  );
};
