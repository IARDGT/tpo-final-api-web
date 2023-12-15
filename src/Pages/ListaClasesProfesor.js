import { ListaMisClases } from "../components/ListaMisClases";
import { useEffect, useState } from 'react';
import { useAuth } from '../components/AuthContext';
import { getMisClases } from '../controller/clase.controller';
import "./style/ListaClasesProfesor.css";

export const ListaClasesProfesor = () => {
  const [datos, setDatos] = useState([]);
  const { userId } = useAuth();

  useEffect(() => {
    const handleCatalogo = async () => {
      try {
        const res = await getMisClases(userId);
        setDatos(res);
      } catch (error) {
        console.error('Error al obtener datos del catálogo:', error);
        setDatos([]);
      }
    };

    handleCatalogo();
  }, []);

  return (
    <>
      <div className="lista-clases-profesor-container">
        <h2 className='display-2'>Mis Clases</h2>
        <ListaMisClases listaClases={datos} cantidadMax={7} misClase={true} urlClase="/ver-clase" />
      </div>
    </>
  )
}