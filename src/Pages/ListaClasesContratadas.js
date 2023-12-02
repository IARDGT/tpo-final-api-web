import { ListaClases2 } from "../components/ListaClases2";
import { useEffect, useState } from 'react';
import { useAuth } from '../components/AuthContext';


import { getListaClaseContratada } from '../controller/claseContratada.controller';
import "./style/ListaClasesProfesor.css";

export const ListaClasesContratadas = () => {

    const [datos, setDatos] = useState([]);

    const { userId } = useAuth();

    useEffect(() => {
        const handleCatalogo = async () => {
          try {
            const res = await getListaClaseContratada(userId);

            console.log('res --------------->', res)
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
                <ListaClases2 listaClases={datos} misClase={ true } urlClase="/ver-clase-contratada" />
            </div>
        </>
    )
}