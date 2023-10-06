import { useParams } from 'react-router-dom';
import { Filtros } from '../components/Filtros';
import { ListaClases } from '../components/ListaClases';

import "./style/Catalogo.css";

const normalizeCategoria = (categoria) => {
    return categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '-');
  };

export const Catalogo = () => {
  const { categoria } = useParams();
  const categoriaNormalizada = normalizeCategoria(categoria);


  return (
    <>
      <div className="catalago-container">
        <Filtros categoria={categoriaNormalizada} />
        <ListaClases cantidadMax={16} urlClase="/ver-clase" categoria={categoriaNormalizada} />
      </div>
    </>
  );
};