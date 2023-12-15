import { useEffect, useState } from 'react';
import { useAuth } from '../components/AuthContext';
import { ListaClasesContratadas } from "../components/ListaClasesContratadas";
import { getListaClaseContratada } from '../controller/claseContratada.controller';
import "./style/ListaClasesProfesor.css";

export const MisClasesContratadas = () => {
  const [datos, setDatos] = useState([]);
  const { userId } = useAuth();


  useEffect(() => {
    const handleCatalogo = async () => {
      try {
        const res = await getListaClaseContratada(userId);
        setDatos(res);
      } catch (error) {
        console.error('Error al obtener datos del catálogo:', error);
        setDatos([]);
      }
    };

    handleCatalogo();
  }, [userId]);

  return (
    <>
      <div className="lista-clases-profesor-container">
        <h2 className='display-2'>Mis Clases Contratadas</h2>
        <ListaClasesContratadas listaClases={datos} urlClase="/ver-clase-contratada" />
      </div>
    </>
  )
}